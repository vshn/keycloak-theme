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

    const pageId = document.body.attributes.getNamedItem("data-page-id");

    const pagesWithLogoAbove = [
        "login-login-config-totp",
        "login-error",
        "login-login-reset-password",
        "login-login-page-expired",
        "login-login-otp",
        "login-login-verify-email",
        "login-login-update-password",
    ];
    const logoParentSelector = pageId && pagesWithLogoAbove.includes(pageId.value) ? '#kc-header': '.card-header' ;

    const logoParent = document.querySelector(logoParentSelector);
    if (logoParent) {
        logoParent.append(logoWrapper)
    }

}
