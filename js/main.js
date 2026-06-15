document.addEventListener('DOMContentLoaded',()=>{
  const counters = [
    {id:'stat1',val:65000,suffix:'+'},
    {id:'stat2',val:1200,suffix:'+'},
    {id:'stat3',val:5300,suffix:'+'},
    {id:'stat4',val:8,suffix:''}
  ];

  counters.forEach(c=>{
    const el=document.getElementById(c.id);
    if(!el) return;
    let start=0; const dur=900; const step=Math.max(1,Math.ceil(c.val/30));
    const iv=setInterval(()=>{
      start += step;
      if(start >= c.val){ start=c.val; clearInterval(iv); }
      el.textContent = start.toLocaleString() + c.suffix;
    },dur/30);
  });

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },{threshold:0.18});
  document.querySelectorAll('.animate-up, .timeline-step').forEach(el=>observer.observe(el));

  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryCards = document.querySelectorAll('.gallery-card');
  if(filterButtons.length && galleryCards.length){
    filterButtons.forEach(btn=>{
      btn.addEventListener('click',()=>{
        filterButtons.forEach(x=>x.classList.remove('active'));
        btn.classList.add('active');
        const filter=btn.dataset.filter;
        galleryCards.forEach(card=>{
          card.style.display = filter === 'all' || card.dataset.category === filter ? 'block' : 'none';
        });
      });
    });
  }

  const progressInner=document.getElementById('progressBarInner');
  const raisedEl=document.getElementById('raisedAmount');
  const goalEl=document.getElementById('goalAmount');
  const progressPercent=document.getElementById('progressPercent');
  if(raisedEl && goalEl && progressInner && progressPercent){
    const raised=parseInt(raisedEl.textContent.replace(/[^0-9]/g,''),10)||0;
    const goal=parseInt(goalEl.textContent.replace(/[^0-9]/g,''),10)||1;
    const pct=Math.min(100,Math.round((raised/goal)*100));
    progressInner.style.width = pct + '%';
    progressPercent.textContent = pct + '%';
  }

  function startRazorpay(amount){
    const RAZORPAY_KEY='REPLACE_WITH_RAZORPAY_KEY';
    const options={
      key:RAZORPAY_KEY,
      amount:parseInt(amount,10)*100,
      currency:'INR',
      name:'Naye Pankh Foundation',
      description:'Donation',
      handler:function(response){
        alert('Thank you — payment id: ' + response.razorpay_payment_id);
      }
    };
    if(typeof Razorpay !== 'undefined'){
      new Razorpay(options).open();
    } else {
      alert('Razorpay script not loaded. This is a demo.');
    }
  }
});
