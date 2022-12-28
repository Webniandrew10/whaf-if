const main = document.querySelector('.main');

const con = document.querySelector('.con');

const txt = document.querySelector('#txt');

const sige = document.querySelector('#sigeBtn');

const pass = document.querySelector('#passBtn');

sige.addEventListener('click', () => {

    pass.style.display = 'none';

    sige.style.display = 'none';

    main.style.backroundColor = '#f27b7b';

    con.style.border = '2px solid #fff';

    con.style.backroundColor = '#f27b7b';

    con.style.boxShadow = '#d95454 15px 15px 20px inset, #d95454 -15px  -15px 20px inset, #cf1e1e 0 0 100px';

    txt.innerHTML = 'Opps walang bawian ah HAHAHAHAHA <br><br> mwamwa ka sakin ';

    txt.style.color = '#fff';

    txt.style.textShadow = '1px 1px #f44d4d -1px  -1px #f44d4d, 0 0 20px red';
                    

});

pass.addEventListener('click', () => {

    let pos1 = Math.floor(Math.random() * 75);
    
    let pos2 = Math.floor(Math.random() * -300);

    pass.style.position = 'absolute';
    
    pass.style.transform = `translate(${pos1}px,${pos2}px)`;


});
