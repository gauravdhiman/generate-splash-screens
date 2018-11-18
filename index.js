const { exec } = require('child_process')
const util = require('util')

const sizes = [
  { name: 'favicon-16', size: '16/16' },
  { name: 'favicon-32', size: '32/32' },
  { name: 'apple-icon-180', size: '180/180' },
  { name: 'pwa-icon-144', size: '144/144' },
  { name: 'pwa-icon-192', size: '192/192' },
  { name: 'pwa-icon-512', size: '512/512' },
  { name: 'apple-splash-640', size: '640/1136' },
  { name: 'apple-splash-750', size: '750/1334' },
  { name: 'apple-splash-1242', size: '1242/2208' },
  { name: 'apple-splash-1125', size: '1125/2436' },
  { name: 'apple-splash-1125', size: '1125/2436' },
  { name: 'apple-splash-1536', size: '1536/2048' },
  { name: 'apple-splash-1668', size: '1668/2224' },
  { name: 'apple-splash-2048', size: '2048/2732' },
]

// NOTE: On windows, we need to prepend file:/// before absolute path of source file.
// Check: https://github.com/wch/webshot/issues/23#issuecomment-220618166
sizes.map(item => {
  exec(util.format(
    'npx webshot --window-size=%s file:///C:/cygwin/home/gauravdhiman/proj/node/generate-splash-screens/index.html ./icons/%s.png',
    item.size,
    item.name
  ))
})
