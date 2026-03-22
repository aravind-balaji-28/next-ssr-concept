module.exports = {
  root: true,
  ignorePatterns: [
    '.eslintrc.js',
    '*.config.js',
    'webpack*.js',
    '**/webpack/**/*.js',
    '**/mpos-assets/js/**/*.js',
    '**/assets/js/**/*.js',
  ],
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'security',
    'sonarjs',
    'promise',
    'jsdoc',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:promise/recommended',
  ],
  rules: {
    // TypeScript Specific Rules
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      {
        allowString: false,
        allowNumber: false,
        allowNullableObject: false,
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        prefix: ['I'],
      },
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
      },
      {
        selector: 'enum',
        format: ['PascalCase'],
      },
      {
        selector: 'class',
        format: ['PascalCase'],
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
      },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array-simple',
      },
    ],

    // Code Quality Rules
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-debugger': 'error',
    'no-alert': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-template': 'error',
    'no-duplicate-imports': 'error',
    'no-param-reassign': 'error',
    eqeqeq: ['error', 'always'],
    curly: ['error', 'all'],
    'no-throw-literal': 'error',
    'no-return-await': 'error',
    'require-await': 'error',
    'no-async-promise-executor': 'error',
    // Complexity Rules
    complexity: ['warn', 10],
    'max-depth': ['warn', 4],
    'max-lines': [
      'warn',
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'max-lines-per-function': [
      'warn',
      {
        max: 150,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'max-params': ['warn', 4],
    'max-nested-callbacks': ['warn', 3],

    // SonarJS Rules (Code Smell Detection)
    'sonarjs/cognitive-complexity': ['error', 15],
    'sonarjs/no-duplicate-string': ['error', { threshold: 3 }],
    'sonarjs/no-identical-functions': 'error',
    'sonarjs/no-collapsible-if': 'error',
    'sonarjs/prefer-immediate-return': 'error',
    'sonarjs/prefer-single-boolean-return': 'error',
    'sonarjs/no-small-switch': 'error',
    'sonarjs/no-unused-collection': 'error',

    // Import Rules
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/no-absolute-path': 'error',
    'import/no-cycle': 'error',
    'import/no-self-import': 'error',
    'import/no-useless-path-segments': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
      },
    ],

    // Security Rules
    'security/detect-object-injection': 'warn',
    'security/detect-non-literal-regexp': 'warn',
    'security/detect-unsafe-regex': 'error',
    'security/detect-buffer-noassert': 'error',
    'security/detect-eval-with-expression': 'error',
    'security/detect-no-csrf-before-method-override': 'error',
    'security/detect-possible-timing-attacks': 'warn',

    // Promise Rules
    'promise/always-return': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-nesting': 'warn',
    'promise/no-return-wrap': 'error',
  },
  overrides: [
    {
      files: ['*.test.ts', '*.spec.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'max-lines-per-function': 'off',
      },
    },
    {
      files: [
        '.eslintrc.{js,cjs}',
        '*.config.js',
        'webpack*.js',
        '**/webpack/**/*.js',
        '**/*.js',
      ],
      parser: 'espree',
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
      plugins: ['prettier'],
      extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    },
  ],
};
