




let indexSlider = 0;
const app = {
    //Slider
    handleShowSlider: function() {
        const sliderList = $('.slider__list');
        const sliderItems = $$('.slider__item');
        const quantityItems = sliderItems.length;

        
        sliderList.style.width = quantityItems * 100 + '%';
        
        for(let item of sliderItems ) {
            item.style.width = 100 / quantityItems + '%';
        }
        
        if(indexSlider > quantityItems - 1) {
            indexSlider = 0;
        }
        sliderList.style.transform = `translateX(-${100 / quantityItems * indexSlider}%)`;
        indexSlider++;


    },

    start: function() {
        setInterval(this.handleShowSlider, 5000)
    }
}

app.start()