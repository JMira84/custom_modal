const modal = {
    modalWrapper: null,
    contentWrapper: null,
    modalData: {
        title: 'Elgato key light',
        paragraphs: [
            'These lights are great if you shoot video at your desk.',
            'My desk is pushed up against the wall, so I didn’t have room for a large soft box. These lights still deliver on the look that I wanted. Plus, it comes with a desktop app where you can adjust the brightness and temperature.'
        ],
        buttonText: 'BUY NOW for $169.99',
        modalImgSrc: './assets/images/elgato-key-light.png',
        closeIconSrc: './assets/images/+.svg'
    },
    renderModal() {
        const container = document.querySelector('.container');
        this.modalWrapper = container.appendChild(document.createElement('div'));
        this.modalWrapper.classList.add('modal-wrapper');

        const bgImg = this.modalWrapper.appendChild(document.createElement('div'));
        bgImg.classList.add('bg-img');

        this.contentWrapper = this.modalWrapper.appendChild(document.createElement('div'));
        this.contentWrapper.classList.add('content-wrapper');

        this.modalInfo();
        this.modalImg();
        this.closeIcon();
    },
    modalInfo() {
        const infoWrapper = this.contentWrapper.appendChild(document.createElement('div'));
        infoWrapper.classList.add('modal-info-wrapper');

        const modalTitle = infoWrapper.appendChild(document.createElement('h1'));
        modalTitle.classList.add('modal-title');
        modalTitle.textContent = this.modalData.title.toUpperCase();

        this.modalData.paragraphs.forEach(paragraph => {
            const modalText = infoWrapper.appendChild(document.createElement('p'));
            modalText.classList.add('modal-text');
            modalText.textContent = paragraph;
        })

        const modalButton = infoWrapper.appendChild(document.createElement('button'));
        modalButton.classList.add('modal-button');
        modalButton.setAttribute('type', 'button');
        modalButton.textContent = this.modalData.buttonText;
    },
    modalImg() {
        const imageWrapper = this.contentWrapper.appendChild(document.createElement('div'));
        imageWrapper.classList.add('modal-img-wrapper');

        const modalImg = imageWrapper.appendChild(document.createElement('img'));
        modalImg.classList.add('modal-img');
        modalImg.src = this.modalData.modalImgSrc;
    },
    closeIcon() {
        const closeIcon = this.contentWrapper.appendChild(document.createElement('img'));
        closeIcon.classList.add('close-icon');
        closeIcon.src = this.modalData.closeIconSrc;

        closeIcon.addEventListener('click', () => {
            this.modalWrapper.classList.remove('show');
        });
    }
}

const openModal = () => {
    const dot = document.querySelector('.dot');
    
    dot.addEventListener('click', () => {
        modal.modalWrapper.classList.add('show');
    })
}

window.onload = () => {
    modal.renderModal();
    openModal();
}