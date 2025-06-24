<#macro content>
<div id="footer">
    <div class="tos-login">${kcSanitize(msg("tosLoginHtml"))?no_esc}</div>
    <div class="tos-register">${kcSanitize(msg("tosRegisterHtml"))?no_esc}</div>
</div>
</#macro>
