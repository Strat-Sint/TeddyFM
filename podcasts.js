document.addEventListener('DOMContentLoaded', function() {
    const sumbit = document.querySelector('.txt');

    sumbit.addEventListener('click', function () {
        const edo = document.querySelector('.all');

        if (edo.style.display === 'none' || edo.style.display === '') {
            edo.style.display = 'block';
        } else if (edo.style.display === 'block') {
            edo.style.display = 'none';
        }
    });
});

window.addEventListener('DOMContentLoaded', function () {
    const audioElements = document.querySelector('.welcome-audio');
    const audioElements1 = document.querySelector('.pineza-audio');
    const audioElements2 = document.querySelector('.pineza-remix-audio');
    const audioElements3 = document.querySelector('.maxairi-audio');
    const audioElements4 = document.querySelector('.kolotripida-audio');
    const audioElements5 = document.querySelector('.dolofonia-audio');
    const downloadOn = this.sessionStorage.getItem('downloadOn');

    if (downloadOn === 'true') {
        audioElements.controlsList.remove('nodownload');
        audioElements1.controlsList.remove('nodownload');
        audioElements2.controlsList.remove('nodownload');
        audioElements3.controlsList.remove('nodownload');
        audioElements4.controlsList.remove('nodownload');
        audioElements5.controlsList.remove('nodownload');
        sessionStorage.setItem('downloadOn', 'false');
    } 

    this.sessionStorage.setItem('reload', 'false'); 
}); 

document.querySelector('.submit-btn').addEventListener('click', function () {
    const form = document.querySelector('.login-form');
    if(form.checkValidity()) {
        const audioElements = document.querySelector('.welcome-audio');
   
        if (audioElements.controlsList.contains('nodownload')) {
            audioElements.controlsList.remove('nodownload');
    
            sessionStorage.setItem('downloadOn', 'true');
        } 
    
        alert('Σε ευχαριστώ για τα λεφτά σου.  \nDownload available');
    } else {
        event.preventDefault();
        form.reportValidity();
    }

});

window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('reload', 'true');
});

window.addEventListener('pagehide', () => {  
    const reload = sessionStorage.getItem('reload') === 'true';
    if (!reload) {
        sessionStorage.removeItem('downloadOn');
    }
}); 