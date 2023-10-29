# Lodgify Tasks Lists

## Notes

As I was thinking about this POC I thought that the best way for me would be to
treat it as a standalone package. The amount of thinking and repo setup that is
required when we try to create something for 'the show' is too much and working
with repo as a package gives me good starting point when it comes to removing
unnecessary things. So, my assumptions are:

- Let's go with TS.
  - Why? I hopped to use TS only as JSDocs but configuration will take another
    evening. So, I returned to TS cause you know, we use TS. DAMN YOU
    TYPESCRIPT!
- No CSS packages, only preprocessor (SCSS).
  - Why? Cause it does not make any sense. If you need any css packages for this
    kind of project then think again and then don't install it. Nobody proven to
    me that using tailwind will be quicker than writing SCSS. I could, but... do
    I have to?
- 100% unit test coverage.
  - Why? Well, because we can.
- Storybook and visual testing
  - Why? Because it's very helpful tool and I believe that in this case this is
    how we should also test it. And Cypress would be an overkill.

### Side note.

I've planned to treat this repo as an example for my mentees to show them how
work should be done. But as always something, in this case (a) time, (b) I'm
sick. All will be done till monday morning.

## THE PLAN

More or less this will be the plan of the things that I need to do. Every part
should finish with PR. I'll create PR's and in the same time push changes to
main. This should show that I understand the proper workflow but might decide to
not obey it if I have a status of God on the repo.

### PART 1 - Box component

@TODO:

- layout component - flex
- create css/scss structure (breakpoints, variables, other)

### PART 2 - Lists components

@TODO:

- think about aria and keyboard navigation
- display mock.data
- loader and how to handle it (probably Lazy Load and 'Skeleton' will be a good
  fit)
- restyle ul maybe?

### PART 3 - CompletionBar component

@TODO:

- html progress element restyling with cross browser compatibility

### PART 4 - Mechanics

@TODO:

- fetching data mechanism
- caching and cache validation (fetch/swr/useQuery?)
- data values normalization (per task)
- data injection

### PART 5 - Other gadjets

@TODO:

- setup husky to run tests before commit/push
- setup pipelines to run tests on PR
- setup main as protected
- publish package in github?

#### started from template

and updated heavily
https://github.com/fabri4c/vite-react-starter




