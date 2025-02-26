# keycloak-theme
VSHN Keycloak IDP Theme

## Local Development

1. Run `docker compose up` to start a local Keycloak with the VSHN theme.
2. Open Keycloak in your browser at http://localhost:8080/
3. Log in with the user configured in docker-compose.yml
4. Go to Realm Settings and then Themes
5. Select the `vshn` theme for login, account, and email
6. To check the account theme, go the account settings of the current user

If the theme is not available in the dropdown, it usually means that it is not valid.
(Except for the admin console, currently no custom theme is available)

## Deploy to Your Instance

1. Merge your Pull Request to master branch
1. Tag it with
    ```bash
    git tag -am v1.x.y v1.x.y
    git push --tags
    ```
1. This will trigger the GitHub Action and pushes the image to https://quay.io/repository/vshn/keycloak-theme?tab=tags
1. Add the tag of the version to your extraInitContainers ([see codecentric helm chart documentation](https://github.com/codecentric/helm-charts/blob/master/charts/keycloak/README.md#providing-a-custom-theme))
    ```yaml
    extraInitContainers: |
      - name: theme-provider
        image: quay.io/vshn/keycloak-theme:v1.x.x
    ```
1. If you plan to use a redirect for the welcome page, then ensure you set `REDIRECT_URL` as environment variable
