var names=document.getElementById('names')
names.addEventListener('click',()=>{
    names.style.backgroundColor="rgba(151, 45, 45, 0.959)"
    names.innerHTML=`<span class="jsName">VASU DEVAN & PRIYA</span>`
    document.getElementById('edit_role').style.display="none"
})