# Angular CLI

Para instalar la "CLI" de angular se requiere tener instalado nodejs y npm.

```sh
$ npm i -g @angular/cli
>
```

Para crear un nuevo proyecto utilizamos el siguiente comando

```sh
$ ng new my-app
>
```

Si queremos ver las opciones que tenemos para crear el proyecto usamos "--help"

```sh
$ ng new my-app --help
arguments:
  name
    The name of the new workspace and initial project.

options:
  --collection (-c)
    A collection of schematics to use in generating the initial app.
  --commit
    Initial git repository commit information.
  --create-application
    When true (the default), creates a new initial app project in the src folder of the new workspace. When false, creates an empty workspace with no initial app. You can then use the generate application command so that all apps are created in the projects folder.
  --defaults
    When true, disables interactive input prompts for options with a default.
  --directory
    The directory name to create the workspace in.
  --dry-run (-d)
    When true, runs through and reports activity without writing out results.
  --enable-ivy
    When true, creates a new app that uses the Ivy rendering engine.
  --force (-f)
    When true, forces overwriting of existing files.
  --help
    Shows a help message for this command in the console.
  --inline-style (-s)
    When true, includes styles inline in the component TS file. By default, an external styles file is created and referenced in the component TS file.
  --inline-template (-t)
    When true, includes template inline in the component TS file. By default, an external template file is created and referenced in the component TS file.
  --interactive
    When false, disables interactive input prompts.
  --minimal
    When true, creates a project without any testing frameworks. (Use for learning purposes only.)
  --new-project-root
    The path where new projects will be created, relative to the new workspace root.
  --prefix (-p)
    The prefix to apply to generated selectors for the initial project.
  --routing
    When true, generates a routing module for the initial project.
  --skip-git (-g)
    When true, does not initialize a git repository.
  --skip-install
    When true, does not install dependency packages.
  --skip-tests (-S)
    When true, does not generate "spec.ts" test files for the new project.
  --style
    The file extension or preprocessor to use for style files.
  --verbose (-v)
    When true, adds more details to output logging.
  --view-encapsulation
    The view encapsulation strategy to use in the initial project.
```

Corremos el proyecto usando el siguiente comando

```sh
$ cd my-app
$ ng serve --open
>
```

[Referencia](https://angular.io/start)

## Actividad

Crear un nuevo proyecto angular con enrutamiento y hoja de estilos "scss"

[Ver Respuesta](./respuestas/angular-cli.md)

[<--](./README.md)
