<#outputformat "plainText">
<#assign requiredActionsText><#if requiredActions??><#list requiredActions><#items as reqActionItem>${msg("requiredAction.${reqActionItem}")}<#sep>, </#sep></#items></#list></#if></#assign>
</#outputformat>

<html>
<body>
${kcSanitize(msg("executeActionsBodyHtml",link, linkExpiration, "VSHN", requiredActionsText, linkExpirationFormatter(linkExpiration)))?no_esc}
</body>
</html>
