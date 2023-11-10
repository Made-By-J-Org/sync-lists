# Tasks Lists with Jotai

## Notes
- React+Jotai/TS.
- No CSS packages, only preprocessor (SCSS).
- 100% unit test coverage.
- Storybook and visual testing
- Browsers support:
  - chrome, edge, FF, safari. At least progress bar was tested on these.

#### Tests

No idea why but vitest does not recognize computed classNames. That's why I'm
using this king of workaround with regexp
`expect(taskWrapperCheckbox.getAttribute('class')).not.toMatch(/checkboxSelected/gi)`

@TODO:
- vitest does not recognize computed classNames
- setup husky to run tests before commit/push
- setup main as protected
- _setup pipelines to run tests on PR_


#### started from template

and updated heavily
https://github.com/fabri4c/vite-react-starter




