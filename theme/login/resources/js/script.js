window.onload = function () {

    const logoVshn  = document.createElement('div');
    logoVshn.id = 'vshn-logo';

    const logoAppuio  = document.createElement('div');
    logoAppuio.id = 'appuio-logo';

    const logoServala  = document.createElement('div');
    logoServala.id = 'servala-logo';

    const logoWrapper = document.createElement('div');
    logoWrapper.className = 'logo-wrapper';
    logoWrapper.append(logoVshn);
    logoWrapper.append(logoAppuio);
    logoWrapper.append(logoServala);

    const cardHeader = document.querySelector('.card-header');
    if (cardHeader) {
        cardHeader.append(logoWrapper)
    }

}
