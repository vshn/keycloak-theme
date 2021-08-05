# keycloak-theme
VSHN Keycloak IDP Theme

## Local Development

Run `docker compose up` to start a local keycloak with the vshn theme.

The vshn theme is not automatically selected for the account application.
This can be changed in the Admin Console by clicking on Realm Settings and then Theme.

## Deploy to Your Instance

1. Merge your Pull Request to master branch
1. Tag it with
    ```bash
    git tag -am v1.x.y
    git push --tags
    ```
1. This will trigger the GitHub Action and pushes the image to https://quay.io/repository/vshn/keycloak-theme?tab=tags
1. Add the tag of the version to your extraInitContainers ([see codecentric helm chart documentation](https://github.com/codecentric/helm-charts/blob/master/charts/keycloak/README.md#providing-a-custom-theme))
    ```yaml
    extraInitContainers: |
      - name: theme-provider
        image: quay.io/vshn/keycloak-theme:v1.x.x
    ```
