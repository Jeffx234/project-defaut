module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],

    files: [
      // Adicione aqui os arquivos necessários para seus testes, como os arquivos de teste e dependências
      // Por exemplo, você pode adicionar 'src/**/*.spec.ts' para incluir todos os arquivos de teste com final .spec.ts
    ],

    preprocessors: {
      // Configuração dos preprocessadores para os arquivos de teste
      // Por exemplo, para arquivos .ts, use '@angular-builders/jest:preprocessor'
    },

    reporters: ['progress', 'coverage-istanbul'],

    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, 'coverage'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true,
    },

    browsers: ['Chrome'], // Pode escolher outros browsers, como Firefox, se preferir

    port: 9876,
    colors: true,
    autoWatch: true,
    singleRun: false, // Defina para true se desejar que o Karma saia após a execução dos testes
    restartOnFileChange: true,
  });
};
