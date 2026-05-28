// Footer current year
document.querySelector('#year').textContent =
    new Date().getFullYear();

// Last modified date
document.querySelector('#lastModified').textContent =
    document.lastModified;

// Save current timestamp
const timestampField =
    document.querySelector('#timestamp');

timestampField.value =
    new Date().toISOString();

// Mobile navigation
const menuBtn =
    document.querySelector('#menuBtn');

const navMenu =
    document.querySelector('#navMenu');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

// Dialog references
const npModal =
    document.querySelector('#npModal');

const bronzeModal =
    document.querySelector('#bronzeModal');

const silverModal =
    document.querySelector('#silverModal');

const goldModal =
    document.querySelector('#goldModal');

// Open modals
document.querySelector('#openNpModal')
    .addEventListener('click', () => {
        npModal.showModal();
    });

document.querySelector('#openBronzeModal')
    .addEventListener('click', () => {
        bronzeModal.showModal();
    });

document.querySelector('#openSilverModal')
    .addEventListener('click', () => {
        silverModal.showModal();
    });

document.querySelector('#openGoldModal')
    .addEventListener('click', () => {
        goldModal.showModal();
    });

// Close modals
document.querySelector('#closeNpModal')
    .addEventListener('click', () => {
        npModal.close();
    });

document.querySelector('#closeBronzeModal')
    .addEventListener('click', () => {
        bronzeModal.close();
    });

document.querySelector('#closeSilverModal')
    .addEventListener('click', () => {
        silverModal.close();
    });

document.querySelector('#closeGoldModal')
    .addEventListener('click', () => {
        goldModal.close();
    });
