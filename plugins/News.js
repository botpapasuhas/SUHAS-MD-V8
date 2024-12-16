const config = require('../config'),
  { cmd } = require('../command'),
  axios = require('axios'),
  { fetchJson } = require('../lib/functions'),
  apilink = 'https://vajiraapi-089fa316ec80.herokuapp.com/news/lnw'
cmd(
  {
    pattern: 'hirunews',
    alias: ['hiru', 'news1'],
    react: '\u2600',
    desc: 'Get hiru news',
    category: 'news',
    use: '.hirunews',
    filename: __filename,
  },
  async (
    _0x2794dc,
    _0x26cf4c,
    _0x3d5f14,
    { from: _0xa39f42, quoted: _0x6fea9c }
  ) => {
    try {
      const _0x3ae62f = await fetchJson(apilink + '/hiru'),
        _0x37b15e =
          '\n\n           \u276E\u276E \uD835\uDDE1\uD835\uDDD4\uD835\uDDD7\uD835\uDDD8\uD835\uDDD8\uD835\uDDE1 \uD835\uDDE0\uD835\uDDD7 \uD835\uDDDB\uD835\uDDDC\uD835\uDDE5\uD835\uDDE8 \uD835\uDDE1\uD835\uDDD8\uD835\uDDEA\uD835\uDDE6.\uD835\uDDDF\uD835\uDDDE \u276F\u276F\n\n       \n\n\u27A4 *Title* - ' +
          _0x3ae62f.result.title +
          '\n\n\u27A4 *News* - ' +
          _0x3ae62f.result.desc +
          '\n\n\u27A4 *Link* - ' +
          _0x3ae62f.result.url +
          '\n\n> \u276F\u276F *✨ Powered By SUHAS-MD-V9 💞* \u27A3'
      await _0x2794dc.sendMessage(
        _0xa39f42,
        {
          image: { url: _0x3ae62f.result.image || '' },
          caption: _0x37b15e,
        },
        { quoted: _0x26cf4c }
      )
    } catch (_0x48f529) {
      console.log(_0x48f529)
      reply(_0x48f529)
    }
  }
)
cmd(
  {
    pattern: 'sirasanews',
    alias: ['sirasa', 'news2'],
    react: '\uD83D\uDD3A',
    desc: 'get sirasa news',
    category: 'news',
    use: '.sirasa',
    filename: __filename,
  },
  async (
    _0x55d2e2,
    _0x2b376c,
    _0x335fcf,
    { from: _0xd85021, quoted: _0x1b4229 }
  ) => {
    try {
      const _0xce0b3e = await fetchJson(apilink + '/sirasa'),
        _0x3c9d44 =
          '\n\n     \u276E\u276E \uD835\uDDE1\uD835\uDDD4\uD835\uDDD7\uD835\uDDD8\uD835\uDDD8\uD835\uDDE1 \uD835\uDDE0\uD835\uDDD7 \uD835\uDDE6\uD835\uDDDC\uD835\uDDE5\uD835\uDDD4\uD835\uDDE6\uD835\uDDD4 \uD835\uDDE1\uD835\uDDD8\uD835\uDDEA\uD835\uDDE6.\uD835\uDDDF\uD835\uDDDE \u276F\u276F\n\n       \n\n\u27A4 *Title* - ' +
          _0xce0b3e.result.title +
          '\n\n\u27A4 *News* - ' +
          _0xce0b3e.result.desc +
          '\n\n\u27A4 *Link* - ' +
          _0xce0b3e.result.url +
          '\n\n> \u276F\u276F *✨ Powered By SUHAS-MD-V9 💞* \u27A3'
      await _0x55d2e2.sendMessage(
        _0xd85021,
        {
          image: { url: _0xce0b3e.result.image || '' },
          caption: _0x3c9d44,
        },
        { quoted: _0x2b376c }
      )
    } catch (_0x8a2dd6) {
      console.log(_0x8a2dd6)
      reply(_0x8a2dd6)
    }
  }
)
cmd(
  {
    pattern: 'derananews',
    alias: ['derana', 'news3'],
    react: '\uD83D\uDFE5',
    desc: '',
    category: 'news',
    use: '.derana',
    filename: __filename,
  },
  async (
    _0x13f093,
    _0x41d803,
    _0x21c38b,
    { from: _0x303b3d, quoted: _0x476975 }
  ) => {
    try {
      const _0x4286de = await fetchJson(apilink + '/derana'),
        _0x598d69 =
          '\n\n          \u276E\u276E \uD835\uDDE1\uD835\uDDD4\uD835\uDDD7\uD835\uDDD8\uD835\uDDD8\uD835\uDDE1 \uD835\uDDE0\uD835\uDDD7 \uD835\uDDD7\uD835\uDDD8\uD835\uDDE5\uD835\uDDD4\uD835\uDDE1\uD835\uDDD4 \uD835\uDDE1\uD835\uDDD8\uD835\uDDEA\uD835\uDDE6.\uD835\uDDDF\uD835\uDDDE \u276F\u276F\n\n       \n\n\u27A4 *Title* - ' +
          _0x4286de.result.title +
          '\n\n\u27A4 *News* - ' +
          _0x4286de.result.desc +
          '\n\n\u27A4 *Link* - ' +
          _0x4286de.result.url +
          '\n\n> \u276F\u276F *✨ Powered By SUHAS-MD-V9 💞* \u27A3'
      await _0x13f093.sendMessage(
        _0x303b3d,
        {
          image: { url: _0x4286de.result.image || '' },
          caption: _0x598d69,
        },
        { quoted: _0x41d803 }
      )
    } catch (_0x223660) {
      console.log(_0x223660)
      reply(_0x223660)
    }
  }
)
