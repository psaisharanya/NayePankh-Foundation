// Simple counters (static values for demo)
document.addEventListener('DOMContentLoaded',()=>{
  // animate numbers (demo)
  const counters = [
    {id:'stat1',val:200000},
    {id:'stat2',val:500},
    {id:'stat3',val:50},
    {id:'stat4',val:10}
  ];
  counters.forEach(c=>{
    const el=document.getElementById(c.id);
    if(!el) return;
    let start=0; const dur=900; const step=Math.ceil(c.val/30);
    const iv=setInterval(()=>{
      start+=step; if(start>=c.val){start=c.val; clearInterval(iv)}
      el.textContent = c.val>=1000 ? (Math.round(start/1000)+'K+') : start;
    }, dur/30);
  });

  // simple carousel rotate
  const slides=document.querySelectorAll('.carousel .slide');
  let idx=0; setInterval(()=>{
    slides[idx].classList.remove('active');
    idx = (idx+1)%slides.length;
    slides[idx].classList.add('active');
  },4000);

  // Donation presets and modal (donate.html)
  const presets = document.querySelectorAll('.preset');
  const customAmt = document.getElementById('custom-amt');
  const payBtn = document.getElementById('payBtn');
  const modal = document.getElementById('donationModal');
  const modalClose = document.getElementById('modalClose');
  const modalAmount = document.getElementById('modalAmount');
  const modalFreq = document.getElementById('modalFreq');
  const modalPay = document.getElementById('modalPay');

  let selectedAmount = null;

  if(presets) presets.forEach(btn=>{
    btn.addEventListener('click',()=>{
      presets.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      selectedAmount = btn.dataset.amount;
      if(customAmt) customAmt.value = '';
    });
  });

  if(payBtn){
    payBtn.addEventListener('click',()=>{
      let amt = selectedAmount || (customAmt && customAmt.value) || 0;
      if(!amt || isNaN(amt) || parseInt(amt)<=0){ alert('Please choose or enter a valid amount'); return; }
      const monthly = document.getElementById('monthly')?.checked;
      if(modal){
        modal.setAttribute('aria-hidden','false');
        modalAmount.textContent = 'Amount: ₹' + amt;
        modalFreq.textContent = monthly ? 'Recurring: Monthly' : 'One-time';
        modalPay.onclick = ()=>{ startRazorpay(amt); };
      } else {
        startRazorpay(amt);
      }
    });
  }

  if(modalClose){ modalClose.addEventListener('click',()=>{ modal.setAttribute('aria-hidden','true'); }); }

  function startRazorpay(amount){
    const RAZORPAY_KEY = 'REPLACE_WITH_RAZORPAY_KEY';
    const options = {
      key: RAZORPAY_KEY,
      amount: parseInt(amount,10)*100,
      currency: 'INR',
      name: 'Naye Pankh Foundation',
      description: 'Donation',
      handler: function (response){
        alert('Thank you — payment id: ' + response.razorpay_payment_id);
      }
    };
    if(typeof Razorpay !== 'undefined'){
      const rzp = new Razorpay(options);
      rzp.open();
    } else {
      alert('Razorpay script not loaded. This is a demo.');
    }
  }
});
