$(document).ready(function() {
    let galleryItems = $('.galleryItem');

    function timeout (ms) {
        return new Promise(res => setTimeout(res,ms));
    }
    async function insertData(item) {
        await clearModal();
        let itemTitle, itemDescription, itemImage = "";
        itemTitle = item.find('.gallery__item-title').html();
        itemDescription = item.find('.gallery__item-description').html();
        itemImage = item.find('.gallery__item-media img').attr('src');
        let itemMedia = item.find('.gallery__item-media').html();
        $('.modal-media').html(itemMedia);
        let itemLink = item.find('.gallery__item-link').attr('href');
        let itemMeta = item.find('.gallery__item-meta').html();
        $('.modal__title').html(itemTitle);
        $('.modal__description').html(itemDescription);
        $('.modal__link').attr('href', itemLink);
        $('.modal__meta').html(itemMeta);
    }
    async function clearModal() {
        $('.modal-media video').addClass('d-none');
        $('.modal__image').attr('src', '').addClass('d-none');
        $('.modal__title').html('');
        $('.modal__description').html('');
        $('.modal__link').attr('href', '');
        $('.modal__meta').html('');
    }
    function getNextItem() {
        let nextItem = $('.galleryItem.active').next();

        if(nextItem.length === 0) {
            nextItem = galleryItems.first();
        }
        galleryItems.removeClass('active');
        nextItem.addClass('active');
        insertData(nextItem);
    }
    function getPrevItem() {
        let nextItem = $('.galleryItem.active').prev();

        if(nextItem.length === 0) {
            nextItem = galleryItems.last();
        }
        galleryItems.removeClass('active');
        nextItem.addClass('active');
        insertData(nextItem);
    }
    $('.modal-controls__next').on('click', getNextItem);
    $('.modal-controls__prev').on('click', getPrevItem);

    galleryItems.each(function() {
        $(this).on('click', () => {
            $(this).addClass('active');
            $('#singleItemModal').modal('show');
            insertData($(this));
        });
    })

    $('.modal').on('swipeleft',function(event){
        event.stopImmediatePropagation();
        getNextItem();
    }).on('swiperight',function(event){
        event.stopImmediatePropagation();
        getPrevItem();
    });
});