module.exports = {
  apps: [
    {
      name: 'cirnect-web-sandbox',
      script: './node_modules/nuxt/bin/nuxt.js',
      exec_mode: 'cluster',
      instances: 'max',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      output: '../../shared/log/cirnect-web_out.log',
      error: '../../shared/log/cirnect-web_err.log',
      log_type: 'json',
      merge_logs: true,
      env: {
        NODE_ENV: 'development'
      }
    },
    {
      name: 'cirnect-web',
      script: './node_modules/nuxt/bin/nuxt.js',
      exec_mode: 'cluster',
      args: 'start',
      instances: 'max',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      output: '../../shared/log/cirnect-web_out.log',
      error: '../../shared/log/cirnect-web_err.log',
      log_type: 'json',
      merge_logs: true,
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
}
