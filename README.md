# keycloak-theme
VSHN Keycloak IDP Theme

## Local Development

1. `docker compose up` to start a local Keycloak with the VSHN theme.
2. Open the Keycloak admin console at [http://localhost:8080](http://localhost:8080) to see the login view
3. Login with the user `admin` and password `admin` to see the admin console

### Configure the Themes

By default, the themes are already set in the `keycloak/master.json` file.
This is the realm configuration file that is imported at startup.

If you want to change the theme, you can do so in the admin console, under Realm Settings -> Themes.

If the theme is not available in the dropdown, it usually means that it is not valid.
(Except for the admin console, currently no custom theme is available)

You can export the realm via the admin console.
This export does not include secrets, but since we only have one admin user, it is not a problem.

### Upgrade to new Keycloak version

1. Update the `docker-compose.yml` file to the new Keycloak version

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
