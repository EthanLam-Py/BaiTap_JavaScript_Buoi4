// Question1
function sapXep() {
    var first_int = document.getElementById('first_int').value;
    var second_int = document.getElementById('second_int').value;
    var third_int = document.getElementById('third_int').value;

    first_int = parseInt(first_int);
    second_int = parseInt(second_int);
    third_int = parseInt(third_int);

    var list_int = [first_int, second_int, third_int];

    var max_int = Math.max(...list_int) ;
    var max_index = list_int.indexOf(max_int);
    var min_int = Math.min(...list_int);
    var min_index = list_int.indexOf(min_int);

    list_int.splice(max_index,1);
    list_int.splice(min_index,1);
    console.log(list_int);
    
    console.log(list_int);
    var medium = list_int;


    var sorted_list = Array(min_int, medium, max_int);

    var question1__result = document.getElementById('question1__result');
    question1__result.style.display = 'block';

    var question1__resultspan = document.getElementById('question1__resultspan');
    question1__resultspan.innerHTML = sorted_list;
}


// Question2
function Chao() {
    var ten = document.getElementById('name').value;
    var quanHe = '';
    quanHe = document.querySelector('input[type="radio"][name="quanHe"]:checked').value;
    console.log(quanHe);
    
    var loiChao = 'xin chào ' + quanHe + ' ' + ten;

    var question2__result = document.getElementById('question2__result');
    question2__result.style.display = 'block';

    var question2__resultspan = document.getElementById('question2__resultspan');
    question2__resultspan.innerHTML = loiChao;
}

// Question1
function timSo() {
    var first = document.getElementById('first').value;
    var second = document.getElementById('second').value;
    var third = document.getElementById('third').value;

    first = parseInt(first);
    second = parseInt(second);
    third = parseInt(third);
    list_int = [first,second,third];

    var even_list = [];
    var odd_list = [];

    for (x of list_int){
        if ((x % 2) == 0) {
            even_list.push(x);
        }
        else{
            odd_list.push(x);
        }
    }
   
    if (even_list.length == 0){
        even_list.push('không có số chẵn')
    }
    if (odd_list.length == 0){
        odd_list.push('không có số lẻ')
    }

    console.log(even_list);
    console.log(odd_list);

    var question3__result = document.getElementById('question3__result');
    question3__result.style.display = 'block';

    var question3__even = document.getElementById('question3__even');
    question3__even.innerHTML = even_list;
    var question3__odd = document.getElementById('question3__odd');
    question3__odd.innerHTML = odd_list;
}

//Question 4
function timTamGiac () {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;

    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);

    list_int = [a,b,c];
    var a_seq = list_int.filter(i => i===a).length;
    var b_seq = list_int.filter(i => i===b).length;
    var c_seq = list_int.filter(i => i===c).length;

    console.log(a_seq);
    console.log(b_seq);
    console.log(c_seq);

    var tamGiac = '';
    
    if (a_seq === 2 || b_seq === 2 || c_seq === 2) {
        tamGiac = 'Tam Giác Cân';
    }
    else if(a_seq === 3 || b_seq === 3 || c_seq === 3 ){
        tamGiac = 'Tam Giác Đều';
    }
    else if(binhPhuong2So(a,b) == c*c || binhPhuong2So(a,c) == b*b || binhPhuong2So(b,c) == a*a){
        tamGiac = 'Tam Giác Vuông';
    }
    else {
        tamGiac = 'Tam Giác Thường';
    }

    var question4__result = document.getElementById('question4__result');
    question4__result.style.display = 'block';

    var question4__resultspan = document.getElementById('question4__resultspan');
    question4__resultspan.innerHTML = tamGiac;
}

function binhPhuong2So(x, y) {
    return x*x + y*y
}