async function bubble(){
    console.log('In bubbe()');
    const ele = docoment.querySelectorAll(".bar");
    for(let i = 0; i< ele.lenght-1; i++){
        console.log('In ith loop');
        for(let j =0; j< ele.length-i-1; j++){
            console.log('In jth loop');
            ele[j].style.background = 'blue';
            ele[j+1].style.background = 'blue';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].styele.height)){
                console.log('In if condition');
                await waitforme(delay);
                swap(ele[j], ele[j+1])[j];
            }
            ele[j].style.background = 'cyan'
            ele[j+1].style.background = 'cyan'
        }
        ele[ele.lenght-1-i].style.background = 'green';
    }
    ele[0].style.background = 'green'
}
const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});