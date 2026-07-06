//Mon Jul 06 2026 08:23:38 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const fs = require("fs"),
  path = require("path"),
  CryptoJS = require("crypto-js"),
  wxcode = require("./wxcode"),
  WXID_CONFIG = process.env.xjck,
  APPID = "wx489f950decfeb93e",
  CACHE_FILE_PATH = path.join(__dirname, "xj.json"),
  RETRY_DELAY_MS = 5000,
  sleep = _0x4c92e2 => new Promise(_0x50e5b6 => setTimeout(_0x50e5b6, _0x4c92e2));
async function fetchWechatCode(_0x311d17) {
  console.log("[" + _0x311d17 + "]   - (Step 1/3) 获取微信 code...");
  try {
    {
      const _0x3d88f1 = await wxcode.getWxCode(_0x311d17, APPID);
      if (_0x3d88f1.success) {
        return _0x3d88f1.code;
      } else return console.log("[" + _0x311d17 + "]   - ❌ 获取 code 失败: " + _0x3d88f1.error), null;
    }
  } catch (_0x23245d) {
    console.log("[" + _0x311d17 + "]   - ❌ 获取 code 请求异常: " + _0x23245d.message);
    return null;
  }
}
async function getEncryptKey(_0x1b2e21) {
  try {
    const _0x23bb1e = await wxcode.getUserInfo(_0x1b2e21, APPID, JSON.stringify({
      "api_name": "webapi_getuserencryptkey"
    }));
    if (_0x23bb1e.success && _0x23bb1e.rawData) {
      {
        const _0x1a3e16 = _0x23bb1e.rawData;
        let _0x1c0cc0;
        if (_0x1a3e16.data) {
          {
            if (typeof _0x1a3e16.data === "string") {
              _0x1c0cc0 = JSON.parse(_0x1a3e16.data);
            } else _0x1c0cc0 = _0x1a3e16.data;
          }
        } else _0x1c0cc0 = _0x1a3e16;
        if (_0x1c0cc0.encrypt_key && _0x1c0cc0.iv && _0x1c0cc0.version !== undefined) return {
          "key_str": _0x1c0cc0.encrypt_key,
          "iv_str": _0x1c0cc0.iv,
          "version": _0x1c0cc0.version
        };
        console.log("[" + _0x1b2e21 + "]   - ❌ 加密参数格式不正确:", _0x1c0cc0);
      }
    } else console.log("[" + _0x1b2e21 + "]   - ❌ 获取加密参数失败: " + (_0x23bb1e.error || "未知错误"));
    return null;
  } catch (_0x24ce9e) {
    console.log("[" + _0x1b2e21 + "]   - ❌ 获取或解析加密参数时发生异常: " + _0x24ce9e.message);
    return null;
  }
}
function readCache() {
  try {
    if (fs.existsSync(CACHE_FILE_PATH)) {
      {
        const _0x17c1b6 = fs.readFileSync(CACHE_FILE_PATH, "utf-8");
        return JSON.parse(_0x17c1b6);
      }
    }
  } catch (_0x400c11) {
    console.log("读取缓存文件失败，将创建新的缓存。", _0x400c11);
  }
  return {};
}
function writeCache(_0x3ce2b0) {
  try {
    fs.writeFileSync(CACHE_FILE_PATH, JSON.stringify(_0x3ce2b0, null, 2), "utf-8");
    console.log("✅ 缓存文件已更新 ->", CACHE_FILE_PATH);
  } catch (_0x24ddae) {
    console.log("❌ 写入缓存文件失败。", _0x24ddae);
  }
}
class EXijiu {
  constructor(_0x59e4ad) {
    this.wxid = _0x59e4ad;
    this.commonHeaders = {
      "Connection": "keep-alive",
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.61(0x18003d2e) NetType/WIFI Language/zh_CN miniProgram/wx489f950decfeb93e",
      "Referer": "https://mallwm.exijiu.com/"
    };
  }
  ["log"](_0x29fb1b) {
    console.log("[" + this.wxid + "] " + _0x29fb1b);
  }
  async ["fetchLoginCode"](_0x86f392) {
    this.log("  - (Step 2/3) 获取临时 login_code...");
    const _0x224fd4 = "https://xcx.exijiu.com/anti-channeling/public/index.php/api/v2/auth/session?code=" + _0x86f392;
    try {
      const _0x4f8f88 = await fetch(_0x224fd4, {
          "method": "GET",
          "headers": {
            ...this.commonHeaders,
            "content-type": "application/json",
            "Referer": "https://servicewechat.com/" + APPID + "/415/page-frame.html"
          }
        }),
        _0x4794c0 = await _0x4f8f88.json();
      return _0x4794c0.code === 0 && _0x4794c0.data?.["login_code"] ? _0x4794c0.data.login_code : null;
    } catch (_0x3f1194) {
      this.log("  - ❌ 获取 login_code 请求异常: " + _0x3f1194.message);
      return null;
    }
  }
  async ["getJwt"](_0x3298df) {
    this.log("  - (Step 3/3) 获取正式 Authorization (JWT)...");
    const _0x37a475 = "https://xcx.exijiu.com/anti-channeling/public/index.php/api/v2/Member/getJwt";
    try {
      const _0x484107 = await fetch(_0x37a475, {
          "method": "GET",
          "headers": {
            ...this.commonHeaders,
            "content-type": "application/json",
            "login_code": _0x3298df,
            "Referer": "https://servicewechat.com/" + APPID + "/415/page-frame.html"
          }
        }),
        _0x2de8a5 = await _0x484107.json();
      if (_0x2de8a5.code === 0 && _0x2de8a5.data?.["jwt"]) {
        this.log("  - ✅ 成功获取新 Token。");
        await this.queryUserInfo(_0x3298df);
        return {
          "jwt": _0x2de8a5.data.jwt,
          "expire_time": _0x2de8a5.data.expire_time
        };
      }
      this.log("  - ❌ 获取 JWT 失败: " + (_0x2de8a5.msg || "未知错误"));
      return null;
    } catch (_0x39cc39) {
      this.log("  - ❌ 获取 JWT 请求异常: " + _0x39cc39.message);
      return null;
    }
  }
  async ["getValidToken"]() {
    this.log("🚀 开始执行登录流程获取 Token...");
    const _0x36b4ec = await fetchWechatCode(this.wxid);
    if (!_0x36b4ec) return null;
    const _0x4bca3e = await this.fetchLoginCode(_0x36b4ec);
    if (!_0x4bca3e) return null;
    const _0x4cf8be = await this.getJwt(_0x4bca3e);
    !_0x4cf8be && this.log("  - ‼️ 无法获取 Token。请确保此账号已在小程序中手动登录授权过。");
    return _0x4cf8be;
  }
  async ["queryUserInfo"](_0x54fefa) {
    this.log("  - 查询用户信息...");
    const _0x6feeea = "https://xcx.exijiu.com/anti-channeling/public/index.php/api/v2/Member/getJifenShopMemberInfo";
    try {
      const _0x6e6422 = await fetch(_0x6feeea, {
          "method": "GET",
          "headers": {
            ...this.commonHeaders,
            "content-type": "application/json",
            "login_code": _0x54fefa,
            "Referer": "https://servicewechat.com/" + APPID + "/415/page-frame.html"
          }
        }),
        _0x4aa717 = await _0x6e6422.json();
      if (_0x4aa717.code === 0 && _0x4aa717.data) {
        const _0x5340f2 = _0x4aa717.data;
        this.log("  - 🎉 [" + _0x5340f2.nick_name + "] [" + _0x5340f2.level_name + "] [积分: " + _0x5340f2.integration + "]");
      } else this.log("  - ❌ 查询用户信息失败: " + (_0x4aa717.msg || "未知错误"));
    } catch (_0x45fecb) {
      this.log("  - ❌ 查询用户信息请求异常: " + _0x45fecb.message);
    }
  }
  async ["refreshAndShowUserInfo"]() {
    this.log("  - 获取最新用户信息...");
    const _0x290c33 = await fetchWechatCode(this.wxid);
    if (!_0x290c33) {
      this.log("  - ❌ 无法获取code来查询用户信息");
      return;
    }
    const _0x33979e = await this.fetchLoginCode(_0x290c33);
    if (!_0x33979e) {
      this.log("  - ❌ 无法获取login_code来查询用户信息");
      return;
    }
    await this.queryUserInfo(_0x33979e);
  }
  ["encryptTs"](_0xc76ab6, _0x42e158, _0xd5f569) {
    const _0x9764b7 = CryptoJS.enc.Utf8.parse(_0x42e158),
      _0x229d9c = CryptoJS.enc.Utf8.parse(_0xd5f569),
      _0x51f778 = _0xc76ab6.toString(),
      _0x50cf99 = CryptoJS.AES.encrypt(_0x51f778, _0x9764b7, {
        "iv": _0x229d9c,
        "mode": CryptoJS.mode.CBC,
        "padding": CryptoJS.pad.Pkcs7
      });
    return _0x50cf99.ciphertext.toString();
  }
  async ["doSignIn"](_0x301067) {
    this.log("🚀 开始执行签到...");
    const _0x466681 = await getEncryptKey(this.wxid);
    if (!_0x466681) {
      this.log("  - ❌ 获取签到加密参数失败，无法签到。");
      return "FAILURE";
    }
    const _0x1f4557 = Date.now(),
      _0x482dcb = this.encryptTs(_0x1f4557, _0x466681.key_str, _0x466681.iv_str),
      _0x207e85 = "https://apimallwm.exijiu.com/member/signin/sign",
      _0x98e547 = new URLSearchParams({
        "from": "miniprogram_index",
        "ts": _0x1f4557,
        "encryptData": _0x482dcb,
        "version": _0x466681.version
      }).toString();
    try {
      const _0x50e7d6 = await fetch(_0x207e85, {
          "method": "POST",
          "headers": {
            ...this.commonHeaders,
            "Authorization": _0x301067,
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "body": _0x98e547
        }),
        _0x58738a = await _0x50e7d6.json();
      if (_0x58738a.err === 0) return this.log("  - ✅ 签到成功: " + _0x58738a.msg + " 获得积分: " + (_0x58738a.data?.["cdpData"]?.["points"] || "N/A")), "SUCCESS";else {
        if (_0x58738a.msg && _0x58738a.msg.includes("今日已签到")) {
          this.log("  - ℹ️ " + _0x58738a.msg);
          return "ALREADY_SIGNED_IN";
        } else return this.log("  - ❌ 签到失败: " + (_0x58738a.msg || JSON.stringify(_0x58738a))), "FAILURE";
      }
    } catch (_0x30c315) {
      this.log("  - ❌ 签到请求异常: " + _0x30c315.message);
      return "FAILURE";
    }
  }
}
(async () => {
  if (!WXID_CONFIG) {
    console.log("❌ 关键配置缺失: 请确保已正确设置 xjck 环境变量。");
    return;
  }
  const _0x4dff74 = WXID_CONFIG.split("\n").map(_0x4bcfb7 => _0x4bcfb7.trim()).filter(Boolean);
  if (_0x4dff74.length === 0) {
    console.log("❌ 环境变量 xjck 中未找到有效的 wxid。");
    return;
  }
  const _0x49cbfe = readCache();
  let _0x3ace74 = false;
  console.log("\n--- 习酒签到任务开始，共 " + _0x4dff74.length + " 个账号 ---\n");
  for (const [_0x1eb279, _0x583440] of _0x4dff74.entries()) {
    console.log("--- [" + (_0x1eb279 + 1) + "/" + _0x4dff74.length + "] 开始处理账号: " + _0x583440 + " ---");
    const _0x50db3e = new EXijiu(_0x583440);
    let _0x4a7e4d = _0x49cbfe[_0x583440],
      _0x220360 = null;
    if (_0x4a7e4d && _0x4a7e4d.expire_time > Date.now() / 1000 + 300) {
      _0x50db3e.log("ℹ️ 发现有效缓存, 尝试使用缓存 Token 签到...");
      _0x220360 = await _0x50db3e.doSignIn(_0x4a7e4d.jwt);
      (_0x220360 === "SUCCESS" || _0x220360 === "ALREADY_SIGNED_IN") && (await _0x50db3e.refreshAndShowUserInfo());
    } else _0x4a7e4d && _0x50db3e.log("ℹ️ 缓存已过期。");
    if (_0x220360 !== "SUCCESS" && _0x220360 !== "ALREADY_SIGNED_IN") {
      if (_0x220360 === "FAILURE") {
        _0x50db3e.log("ℹ️ 签到失败，可能 Token 已失效。");
      } else _0x50db3e.log("ℹ️ 无有效缓存或缓存已过期。");
      _0x50db3e.log("   -> 准备刷新Token，等待 " + RETRY_DELAY_MS / 1000 + " 秒...");
      await sleep(RETRY_DELAY_MS);
      _0x50db3e.log("   -> 开始执行登录...");
      const _0x34ccd5 = await _0x50db3e.getValidToken();
      _0x34ccd5 ? (_0x49cbfe[_0x583440] = _0x34ccd5, _0x3ace74 = true, await _0x50db3e.doSignIn(_0x34ccd5.jwt)) : _0x50db3e.log("❌ 登录流程失败，跳过此账号。");
    }
    console.log("--- 账号: " + _0x583440 + " 处理完毕 ---\n");
  }
  _0x3ace74 && writeCache(_0x49cbfe);
  console.log("--- 所有账号处理完毕 ---");
})();