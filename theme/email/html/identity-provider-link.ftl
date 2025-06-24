<html>
<body>
${kcSanitize(msg("identityProviderLinkBodyHtml", identityProviderAlias, "VSHN", identityProviderContext.username, link, linkExpiration, linkExpirationFormatter(linkExpiration)))?no_esc}
</body>
</html>
