$(function (){
    let curr = 0;
    const arrlen = 3;
    const container = $(".slideshowcontainer");

    function updateUI(){
        container.css({
            transform: `translateX(calc(${curr} * -100%))`,
        });
    }

    $('#prevBtn').on("click", () => {
        const newCurr = curr - 1;
        curr = newCurr < 0 ? arrlen - 1 : newCurr;
        updateUI();
    } );

    $('#nextBtn').on("click", () => {
        curr = (curr + 1) % arrlen;
        updateUI();
    } );
});