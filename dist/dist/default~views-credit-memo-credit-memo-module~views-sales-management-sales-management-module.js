(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-credit-memo-credit-memo-module~views-sales-management-sales-management-module"],{

/***/ "./node_modules/ng-thermal-print/fesm2015/ng-thermal-print.js":
/*!********************************************************************!*\
  !*** ./node_modules/ng-thermal-print/fesm2015/ng-thermal-print.js ***!
  \********************************************************************/
/*! exports provided: PrintService, ThermalPrintModule, UsbDriver, WebPrintDriver, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintService", function() { return PrintService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThermalPrintModule", function() { return ThermalPrintModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsbDriver", function() { return UsbDriver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPrintDriver", function() { return WebPrintDriver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return PrintBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return PrintDriver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/ng-thermal-print/node_modules/tslib/tslib.es6.js");




class PrintBuilder {
}

// Hat-tip to Håvard Lian @ https://github.com/haavardlian/escpos
class PrintBuffer {
    constructor(size = 1024) {
        this.buffer = new Uint8Array(size);
        this.size = 0;
    }
    clear() {
        this.size = 0;
    }
    flush() {
        const buffer = new Uint8Array(this.buffer.slice(0, this.size));
        this.size = 0;
        return buffer;
    }
    write(data) {
        this.resize(data.length);
        this.buffer.set(data, this.size);
        this.size += data.length;
        return this;
    }
    writeUInt8(value) {
        this.resize(1);
        this.buffer[this.size++] = value & 0xFF;
        return this;
    }
    resize(need) {
        const remaining = this.buffer.length - this.size;
        if (remaining < need) {
            const oldBuffer = this.buffer;
            const factor = Math.ceil((need - remaining) / oldBuffer.length) + 1;
            this.buffer = new Uint8Array(oldBuffer.length * factor);
            this.buffer.set(oldBuffer, 0);
        }
    }
}

const ESC = 0x1b;
const GS = 0x1D;
class StarPrintBuilder extends PrintBuilder {
    constructor() {
        super();
        this.encoder = new TextEncoder();
    }
    init() {
        this.buffer = new PrintBuffer();
        this.write(ESC);
        this.write("@");
        return this;
    }
    flush() {
        return this.buffer.flush();
    }
    feed(lineCount = 1) {
        this.write(ESC);
        this.write("a");
        this.write(lineCount);
        return this;
    }
    cut(cutType = 'full') {
        this.write(ESC);
        this.write("d");
        this.write(cutType === 'full' ? 2 : 3);
        return this;
    }
    writeLine(value) {
        return this.write(`${value}\n`);
    }
    setInverse(inverse = true) {
        this.write(ESC);
        (inverse) ? this.write("4") : this.write("5");
        return this;
    }
    setUnderline(underline = true) {
        this.write(ESC);
        this.write("-");
        this.write(underline ? 1 : 0);
        return this;
    }
    setJustification(value) {
        let alignment;
        switch (value) {
            case "center":
                alignment = 1;
                break;
            case "right":
                alignment = 2;
                break;
            default:
                alignment = 0;
                break;
        }
        this.write(ESC);
        this.write(GS);
        this.write("a");
        this.write(alignment);
        return this;
    }
    setBold(bold = true) {
        this.write(ESC);
        (bold) ? this.write("E") : this.write("F");
        return this;
    }
    setSize(size) {
        this.write(ESC);
        this.write("i");
        this.write((size === 'normal') ? 0 : 1);
        this.write((size === 'normal') ? 0 : 1);
        return this;
    }
    write(value) {
        if (typeof value === "number") {
            this.buffer.writeUInt8(value);
        }
        else if (typeof value === "string") {
            this.buffer.write(this.encoder.encode(value));
        }
        else {
            this.buffer.write(value);
        }
        return this;
    }
}

//
// StarWebPrintBuilder API
//
// Version 1.1.0
//
// Copyright 2012 STAR MICRONICS CO., LTD. All Rights Reserved.
//

var StarWebPrintBuilder = function () {};
StarWebPrintBuilder.prototype.createAlignmentElement = function (b) {
  var a = "<alignment";
  void 0 != b &&
    (a += this._analysisEnumAttribute(
      "position",
      b.position,
      /^(left|center|right)$/
    ));
  return a + "/>";
};
StarWebPrintBuilder.prototype.createBarcodeElement = function (b) {
  var a;
  if (void 0 != b) {
    a =
      "<barcode" +
      this._analysisEnumAttribute(
        "symbology",
        b.symbology,
        /^(UPCE|UPCA|JAN8|JAN13|Code39|ITF|Code128|Code93|NW7)$/
      );
    a += this._analysisEnumAttribute(
      "width",
      b.width,
      /^(width[2-4]|width_mode[1-9])$/
    );
    a += this._analysisEnumAttribute("hri", b.hri, /^(false|true)$/);
    a += this._analysisValueAttribute("height", b.height, 1, 255);
    if (void 0 == b.data) throw Error('Argument "data" is undefined.');
    a = a + ">" + this._encodeEscapeSequenceBinary(b.data);
  } else throw Error("Argument is undefined.");
  return (a += "</barcode>");
};
StarWebPrintBuilder.prototype.createBitImageElement = function (b) {
  var a = "<bitimage";
  if (void 0 != b) {
    var d = 0,
      e = 0,
      c = 0,
      f = 0;
    void 0 != b.x && (d = b.x);
    void 0 != b.y && (e = b.y);
    void 0 != b.width && (c = b.width);
    void 0 != b.height && (f = b.height);
    this._analysisValueAttribute("x", d, 0, 65535);
    this._analysisValueAttribute("y", e, 0, 65535);
    a += this._analysisValueAttribute("width", c, 0, 65535);
    a += this._analysisValueAttribute("height", f, 0, 65535);
    if (void 0 == b.context) throw Error('Argument "context" is undefined.');
    a =
      a +
      ">" +
      this._encodeRasterImage(b.context.getImageData(d, e, c, f).data, c, f);
  } else throw Error("Argument is undefined.");
  return (a += "</bitimage>");
};
StarWebPrintBuilder.prototype.createCutPaperElement = function (b) {
  var a = "<cutpaper";
  void 0 != b &&
    ((a += this._analysisEnumAttribute("feed", b.feed, /^(false|true)$/)),
    (a += this._analysisEnumAttribute("type", b.type, /^(full|partial)$/)));
  return a + "/>";
};
StarWebPrintBuilder.prototype.createFeedElement = function (b) {
  var a;
  if (void 0 != b)
    if (void 0 != b.line || void 0 != b.unit)
      (a = "<feed" + this._analysisValueAttribute("line", b.line, 1, 255)),
        (a += this._analysisValueAttribute("unit", b.unit, 1, 255));
    else throw Error('Argument "line / unit" is undefined.');
  else throw Error("Argument is undefined.");
  return a + "/>";
};
StarWebPrintBuilder.prototype.createInitializationElement = function (b) {
  var a = "<initialization";
  void 0 != b &&
    ((a += this._analysisEnumAttribute("reset", b.reset, /^(false|true)$/)),
    (a += this._analysisEnumAttribute("print", b.print, /^(false|true)$/)));
  return a + "/>";
};
StarWebPrintBuilder.prototype.createLogoElement = function (b) {
  var a = "<logo";
  void 0 != b &&
    ((a += this._analysisEnumAttribute("width", b.width, /^(single|double)$/)),
    (a += this._analysisEnumAttribute("height", b.height, /^(single|double)$/)),
    (a += this._analysisValueAttribute("number", b.number, 1, 255)));
  return a + "/>";
};
StarWebPrintBuilder.prototype.createPdf417Element = function (b) {
  var a;
  if (void 0 != b) {
    a =
      "<pdf417" +
      this._analysisEnumAttribute("level", b.level, /^(level[0-8])$/);
    void 0 != b.line &&
      (a =
        0 != b.line
          ? a + this._analysisValueAttribute("line", b.line, 3, 90)
          : a + ' line="0"');
    a += this._analysisValueAttribute("column", b.column, 0, 30);
    a += this._analysisValueAttribute("module", b.module, 1, 8);
    a += this._analysisValueAttribute("aspect", b.aspect, 1, 8);
    if (void 0 == b.data) throw Error('Argument "data" is undefined.');
    a = a + ">" + this._encodeEscapeSequenceBinary(b.data);
  } else throw Error("Argument is undefined.");
  return (a += "</pdf417>");
};
StarWebPrintBuilder.prototype.createPeripheralElement = function (b) {
  var a = "<peripheral";
  void 0 != b &&
    ((a += this._analysisValueAttribute("channel", b.channel, 1, 2)),
    (a += this._analysisValueAttribute("on", b.on, 1, 65535)),
    (a += this._analysisValueAttribute("off", b.off, 1, 65535)));
  return a + "/>";
};
StarWebPrintBuilder.prototype.createQrCodeElement = function (b) {
  var a;
  if (void 0 != b) {
    a =
      "<qrcode" +
      this._analysisEnumAttribute("model", b.model, /^(model[12])$/);
    a += this._analysisEnumAttribute("level", b.level, /^(level_[lmqh])$/);
    a += this._analysisValueAttribute("cell", b.cell, 1, 8);
    if (void 0 == b.data) throw Error('Argument "data" is undefined.');
    a = a + ">" + this._encodeEscapeSequenceBinary(b.data);
  } else throw Error("Argument is undefined.");
  return (a += "</qrcode>");
};
StarWebPrintBuilder.prototype.createRawDataElement = function (b) {
  if (void 0 != b) {
    if (void 0 == b.data) throw Error('Argument "data" is undefined.');
    b = "<rawdata>" + this._encodeBase64Binary(b.data);
  } else throw Error("Argument is undefined.");
  return b + "</rawdata>";
};
StarWebPrintBuilder.prototype.createRuledLineElement = function (b) {
  var a = "<ruledline";
  void 0 != b &&
    ((a += this._analysisEnumAttribute(
      "thickness",
      b.thickness,
      /^(thin|medium|thick|double_(thin|medium|thick))$/
    )),
    (a += this._analysisValueAttribute("width", b.width, 1, 65535)));
  return a + "/>";
};
StarWebPrintBuilder.prototype.createSoundElement = function (b) {
  var a = "<sound";
  void 0 != b &&
    ((a += this._analysisValueAttribute("channel", b.channel, 1, 2)),
    (a += this._analysisValueAttribute("repeat", b.repeat, 1, 20)));
  return a + "/>";
};
StarWebPrintBuilder.prototype.createTextElement = function (b) {
  var a;
  if (void 0 != b)
    (a =
      "<text" +
      this._analysisEnumAttribute("emphasis", b.emphasis, /^(false|true)$/)),
      (a += this._analysisEnumAttribute("invert", b.invert, /^(false|true)$/)),
      (a += this._analysisEnumAttribute("linespace", b.linespace, /^(24|32)$/)),
      (a += this._analysisEnumAttribute("font", b.font, /^(font_[ab])$/)),
      (a += this._analysisEnumAttribute(
        "underline",
        b.underline,
        /^(false|true)$/
      )),
      (a += this._analysisValueAttribute(
        "characterspace",
        b.characterspace,
        0,
        7
      )),
      (a += this._analysisValueAttribute("width", b.width, 1, 6)),
      (a += this._analysisValueAttribute("height", b.height, 1, 6)),
      (a += this._analysisEnumAttribute(
        "codepage",
        b.codepage,
        /^(cp(437|737|772|774|851|852|855|857|858|860|861|862|863|864|865|866|869|874|928|932|998|999|1001|1250|1251|1252|2001|3001|3002|3011|3012|3021|3041|3840|3841|3843|3844|3845|3846|3847|3848)|utf8|blank|utf8|shift_jis|gb18030|gb2312|big5|korea)$/
      )),
      (a += this._analysisEnumAttribute(
        "international",
        b.international,
        /^(usa|france|germany|uk|denmark|sweden|italy|spain|japan|norway|denmark2|spain2|latin_america|korea|ireland|legal)$/
      )),
      void 0 != b.data
        ? ((a += ">"),
          (a =
            !0 == b.binary
              ? a + this._encodeEscapeSequenceBinary(b.data)
              : a + this._encodeEscapeSequence(b.data)),
          (a += "</text>"))
        : (a += "/>");
  else throw Error("Argument is undefined.");
  return a;
};
StarWebPrintBuilder.prototype.createHoldPrintElement = function (b) {
  var a = "<holdprint";
  void 0 != b &&
    (a += this._analysisEnumAttribute(
      "type",
      b.type,
      /^(valid|invalid|default)$/
    ));
  return a + "/>";
};
StarWebPrintBuilder.prototype._analysisEnumAttribute = function (b, a, d) {
  if (void 0 != a) {
    if (!d.test(a)) throw Error('Argument "' + b + '" is invalid.');
    return " " + b + '="' + a + '"';
  }
  return "";
};
StarWebPrintBuilder.prototype._analysisValueAttribute = function (b, a, d, e) {
  if (void 0 != a) {
    if (a < d || a > e) throw Error('Argument "' + b + '" is invalid.');
    return " " + b + '="' + a + '"';
  }
  return "";
};
StarWebPrintBuilder.prototype._encodeEscapeSequence = function (b) {
  var a = /[\\\x00-\x20\x26\x3c\x3e\x7f]/g;
  a.test(b) &&
    (b = b.replace(a, function (a) {
      return "\\" == a
        ? "\\\\"
        : "\\x" + ("0" + a.charCodeAt(0).toString(16)).slice(-2);
    }));
  return b;
};
StarWebPrintBuilder.prototype._encodeEscapeSequenceBinary = function (b) {
  var a = /[\\\x00-\x20\x26\x3c\x3e\x7f-\xff]/g;
  a.test(b) &&
    (b = b.replace(a, function (a) {
      return "\\" == a
        ? "\\\\"
        : "\\x" + ("0" + a.charCodeAt(0).toString(16)).slice(-2);
    }));
  return b;
};
StarWebPrintBuilder.prototype._encodeBase64Binary = function (b) {
  var a = "",
    d = b.length;
  b += "\x00\x00";
  for (var e = 0; e < d; e += 3)
    var c =
        (b.charCodeAt(e) << 16) |
        (b.charCodeAt(e + 1) << 8) |
        b.charCodeAt(e + 2),
      a =
        a +
        ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(
          (c >> 18) & 63
        ) +
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(
            (c >> 12) & 63
          ) +
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(
            (c >> 6) & 63
          ) +
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(
            c & 63
          ));
  switch (d % 3) {
    case 1:
      return a.slice(0, -2) + "==";
    case 2:
      return a.slice(0, -1) + "=";
  }
  return a;
};
StarWebPrintBuilder.prototype._encodeRasterImage = function (b, a, d) {
  for (
    var e = [
        [-254, -126, -222, -94, -246, -118, -214, -86],
        [-62, -190, -30, -158, -54, -182, -22, -150],
        [-206, -78, -238, -110, -198, -70, -230, -102],
        [-14, -142, -46, -174, -6, -134, -38, -166],
        [-242, -114, -210, -82, -250, -122, -218, -90],
        [-50, -178, -18, -146, -58, -186, -26, -154],
        [-194, -66, -226, -98, -202, -74, -234, -106],
        [-2, -130, -34, -162, -10, -138, -42, -170],
      ],
      c = "",
      f = 0,
      g = 0;
    g < d;
    g++
  ) {
    for (var h = 0, k = 128, l = 0; l < a; l++)
      if (
        (((30 * b[f] + 59 * b[f + 1] + 11 * b[f + 2]) * b[f + 3] + 12800) /
          25500 -
          b[f + 3] <
          e[g & 7][l & 7] && (h |= k),
        (f += 4),
        0 == (k >>= 1))
      )
        (c += String.fromCharCode(h)), (h = 0), (k = 128);
    128 != k && (c += String.fromCharCode(h));
  }
  b = c;
  c = "";
  a = b.length;
  b += "\x00\x00";
  for (g = 0; g < a; g += 3)
    (d =
      (b.charCodeAt(g) << 16) |
      (b.charCodeAt(g + 1) << 8) |
      b.charCodeAt(g + 2)),
      (c +=
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(
          (d >> 18) & 63
        ) +
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(
          (d >> 12) & 63
        ) +
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(
          (d >> 6) & 63
        ) +
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(
          d & 63
        ));
  switch (a % 3) {
    case 1:
      return c.slice(0, -2) + "==";
    case 2:
      return c.slice(0, -1) + "=";
  }
  return c;
};

class WebPrintBuilder extends PrintBuilder {
    constructor() {
        super();
        this.builder = new StarWebPrintBuilder();
    }
    init() {
        this.request += this.builder.createInitializationElement();
        return this;
    }
    setJustification(value = 'left') {
        this.request += this.builder.createAlignmentElement({ position: value });
        return this;
    }
    setBold(value = true) {
        this.request += this.builder.createTextElement({ emphasis: value });
        return this;
    }
    setUnderline(value = true) {
        this.request += this.builder.createTextElement({ underline: value });
        return this;
    }
    setInverse(value = true) {
        this.request += this.builder.createTextElement({ invert: value });
        return this;
    }
    writeLine(value) {
        this.request += this.builder.createTextElement({ data: `${value}\n` });
        return this;
    }
    setSize(size = 'normal') {
        let fontSize;
        switch (size) {
            case 'large':
                fontSize = 2;
                break;
            default:
                fontSize = 1;
                break;
        }
        this.request += this.builder.createTextElement({ width: fontSize, height: fontSize });
        return this;
    }
    cut(type = 'full') {
        this.request += this.builder.createCutPaperElement({ feed: true, type: type });
        return this;
    }
    feed(lines = 1) {
        this.request += this.builder.createFeedElement({ line: lines });
        return this;
    }
    flush() {
        return this.request;
    }
}

const ESC$1 = 0x1b;
const GS$1 = 0x1D;
class EscBuilder extends PrintBuilder {
    constructor() {
        super();
        this.encoder = new TextEncoder();
    }
    init() {
        this.buffer = new PrintBuffer();
        this.write(ESC$1);
        this.write("@");
        return this;
    }
    flush() {
        return this.buffer.flush();
    }
    feed(lineCount = 1) {
        this.write(ESC$1);
        this.write("d");
        this.write(lineCount);
        return this;
    }
    cut(cutType = 'full') {
        this.write(GS$1);
        this.write("V");
        this.write(cutType === 'full' ? 1 : 0);
        return this;
    }
    writeLine(value) {
        return this.write(`${value}\n`);
    }
    setInverse(inverse = true) {
        this.write(GS$1);
        this.write("B");
        this.write(inverse ? 1 : 0);
        return this;
    }
    setUnderline(value = true) {
        this.write(ESC$1);
        this.write("-");
        this.write(value ? 1 : 0);
        return this;
    }
    setJustification(value = 'left') {
        let alignment;
        switch (value) {
            case "center":
                alignment = 1;
                break;
            case "right":
                alignment = 2;
                break;
            default:
                alignment = 0;
                break;
        }
        this.write(ESC$1);
        this.write("a");
        this.write(alignment);
        return this;
    }
    setBold(bold = true) {
        this.write(ESC$1);
        this.write("E");
        this.write(bold ? 1 : 0);
        return this;
    }
    /**
    @param mode 0, 0x30
    */
    setSize(size = 'normal') {
        this.write(ESC$1);
        this.write("!");
        this.write((size === 'normal') ? 0 : 0x30);
        return this;
    }
    write(value) {
        if (typeof value === "number") {
            this.buffer.writeUInt8(value);
        }
        else if (typeof value === "string") {
            this.buffer.write(this.encoder.encode(value));
        }
        else {
            this.buffer.write(value);
        }
        return this;
    }
}

class PrintService extends PrintBuilder {
    constructor() {
        super();
        this.isConnected = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    /**
     *
     * @param driver UsbDriver | WebPrintDriver
     * @param printLanguage ESC/POS | StarPRNT | WebPRNT
     */
    setDriver(driver, printLanguage = 'ESC/POS') {
        this.driver = driver;
        this.printLanguage = printLanguage;
        this.driver.connect();
        this.driver.isConnected.subscribe(result => {
            this.isConnected.next(result);
        });
        return this;
    }
    /**
     * Initialize a new print queue
     */
    init() {
        if (!this.driver) {
            throw "Cannot initiate the print service.  No connection detected.";
        }
        switch (this.printLanguage) {
            case 'WebPRNT':
                this.builder = new WebPrintBuilder();
                break;
            case 'StarPRNT':
                this.builder = new StarPrintBuilder();
                break;
            default:
                this.builder = new EscBuilder();
                break;
        }
        this.builder.init();
        return this;
    }
    /**
     *
     * @param cutType full|partial
     */
    cut(cutType = 'full') {
        this.builder.cut(cutType);
        return this;
    }
    /**
     *
     * @param lineCount How many lines to feed
     */
    feed(lineCount = 1) {
        this.builder.feed(lineCount);
        return this;
    }
    setInverse(value = true) {
        this.builder.setInverse(value);
        return this;
    }
    setBold(value = true) {
        this.builder.setBold(value);
        return this;
    }
    setUnderline(value = true) {
        this.builder.setUnderline(value);
        return this;
    }
    /**
     *
     * @param value left|center\right
     */
    setJustification(value = 'left') {
        this.builder.setJustification(value);
        return this;
    }
    /**
     *
     * @param value normal|large
     */
    setSize(value = 'normal') {
        this.builder.setSize(value);
        return this;
    }
    /**
     *
     * @param text
     */
    writeLine(text = '') {
        this.builder.writeLine(text);
        return this;
    }
    /**
     * write the current builder value to the driver and clear out the builder
     */
    flush() {
        this.driver.write(this.builder.flush());
    }
}
PrintService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function PrintService_Factory() { return new PrintService(); }, token: PrintService, providedIn: "root" });
PrintService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
PrintService.ctorParameters = () => [];

class PrintDriver {
}

//
// StarWebPrintTrader API
//
// Version 1.1.0
//
// Copyright 2012 STAR MICRONICS CO., LTD. All Rights Reserved.
//

var StarWebPrintTrader = function (a) {
    this.papertype = this.checkedblock = this.url = null;
    this.timeout = 9e4;
    this.onTimeout = this.onError = this.onReceive = null;
    this.holdprint_timeout = void 0;
    this._json = this._url = null;
    void 0 != a &&
      (void 0 != a.url && (this.url = a.url),
      void 0 != a.checkedblock && (this.checkedblock = a.checkedblock),
      void 0 != a.papertype && (this.papertype = a.papertype),
      void 0 != a.timeout && (this.timeout = a.timeout),
      void 0 != a.holdprint_timeout &&
        (this.holdprint_timeout = a.holdprint_timeout));
  },
  _handlerCallback = {};
function _onFinish(a) {
  var b = _handlerCallback[a.url],
    c = a.response;
  _handlerCallback[a.url] = null;
  if (200 == a.htmlCode)
    b.onReceive({
      traderSuccess: c.slice(
        c.indexOf("&lt;success&gt;") + 15,
        c.indexOf("&lt;/success&gt;")
      ),
      traderCode: c.slice(
        c.indexOf("&lt;code&gt;") + 12,
        c.indexOf("&lt;/code&gt;")
      ),
      traderStatus: c.slice(
        c.indexOf("&lt;status&gt;") + 14,
        c.indexOf("&lt;/status&gt;")
      ),
      status: a.htmlCode,
      responseText: c,
    });
  else b.onError({ status: a.htmlCode, responseText: c });
}
StarWebPrintTrader.prototype._callMessageHandler = function () {
  var a = this;
  null == _handlerCallback[a._url]
    ? ((_handlerCallback[a._url] = a),
      webkit.messageHandlers.sendMessageHandler.postMessage(a._json))
    : setTimeout(function () {
        a._callMessageHandler();
      }, 500);
};
StarWebPrintTrader.prototype.sendMessage = function (a) {
  var b = "<root";
  void 0 != a.checkedblock
    ? !1 == a.checkedblock && (b += ' checkedblock="false"')
    : !1 == this.checkedblock && (b += ' checkedblock="false"');
  void 0 != a.papertype
    ? "normal" == a.papertype
      ? (b += ' papertype="normal"')
      : "black_mark" == a.papertype
      ? (b += ' papertype="black_mark"')
      : "black_mark_and_detect_at_power_on" == a.papertype &&
        (b += ' papertype="black_mark_and_detect_at_power_on"')
    : "normal" == this.papertype
    ? (b += ' papertype="normal"')
    : "black_mark" == this.papertype
    ? (b += ' papertype="black_mark"')
    : "black_mark_and_detect_at_power_on" == this.papertype &&
      (b += ' papertype="black_mark_and_detect_at_power_on"');
  void 0 != a.holdprint_timeout
    ? (b += ' holdprint_timeout="' + a.holdprint_timeout + '"')
    : void 0 != this.holdprint_timeout &&
      (b += ' holdprint_timeout="' + this.holdprint_timeout + '"');
  var b = b + (">" + a.request + "</root>"),
    c;
  c =
    '<StarWebPrint xmlns="http://www.star-m.jp" xmlns:i="http://www.w3.org/2001/XMLSchema-instance"><Request>';
  c += this._encodeEscapeSequence(b);
  c += "</Request>";
  c += "</StarWebPrint>";
  b = "";
  b = void 0 != a.url ? a.url : this.url;
  if (
    /^https?:\/\/(localhost|127\.0\.0\.1):8001\//.test(b.toLowerCase()) &&
    -1 != navigator.userAgent.indexOf("webPRNTSupportMessageHandler")
  )
    (this._json = JSON.stringify({ url: b, body: c })),
      (this._url = b),
      this._callMessageHandler();
  else {
    var d = null;
    if (window.XMLHttpRequest) d = new XMLHttpRequest();
    else if (window.ActiveXObject) d = new ActiveXObject("Microsoft.XMLHTTP");
    else {
      if (this.onError)
        this.onError({
          status: 10001,
          responseText: "XMLHttpRequest is not supported.",
        });
      return;
    }
    if (
      -1 != navigator.userAgent.indexOf("iPad;") ||
      -1 != navigator.userAgent.indexOf("iPhone;") ||
      -1 != navigator.userAgent.indexOf("iPod touch;") ||
      -1 != navigator.userAgent.indexOf("Android")
    )
      if (
        -1 == navigator.userAgent.indexOf("WebPRNTSupportHTTPS") &&
        (0 == b.toLowerCase().indexOf("https://localhost") ||
          0 == b.toLowerCase().indexOf("https://127.0.0.1"))
      )
        b = "http://" + b.substring(8);
    try {
      d.open("POST", b, !0);
    } catch (f) {
      if (this.onError)
        this.onError({ status: 10002, responseText: f.message });
      return;
    }
    try {
      void 0 != a.timeout
        ? (d.timeout = a.timeout)
        : this.timeout && (d.timeout = this.timeout);
    } catch (h) {}
    d.setRequestHeader("Content-Type", "text/xml; charset=UTF-8");
    var e = this;
    d.onreadystatechange = function () {
      if (4 == d.readyState)
        try {
          if (200 == d.status) {
            var a = d.responseXML.getElementsByTagName("Response");
            if (0 < a.length) {
              if (e.onReceive) {
                var b = a[0].childNodes[0].nodeValue;
                e.onReceive({
                  traderSuccess: b.slice(
                    b.indexOf("<success>") + 9,
                    b.indexOf("</success>")
                  ),
                  traderCode: b.slice(
                    b.indexOf("<code>") + 6,
                    b.indexOf("</code>")
                  ),
                  traderStatus: b.slice(
                    b.indexOf("<status>") + 8,
                    b.indexOf("</status>")
                  ),
                  status: d.status,
                  responseText: d.responseText,
                });
              }
            } else if (e.onError)
              e.onError({ status: d.status, responseText: d.responseText });
          } else if (e.onError)
            e.onError({ status: d.status, responseText: d.responseText });
        } catch (c) {
          if (e.onError)
            e.onError({
              status: 0,
              responseText: "Connection timeout occurred.",
            });
        }
    };
    try {
      d.ontimeout = function () {
        if (e.onTimeout) e.onTimeout();
      };
    } catch (k) {}
    try {
      d.send(c);
    } catch (g) {
      if (this.onError)
        this.onError({ status: 10003, responseText: g.message });
    }
  }
};
StarWebPrintTrader.prototype._onHandlerSuccess = function (a) {
  if (trader.onReceive) trader.onReceive(a);
};
StarWebPrintTrader.prototype._onHandlerError = function (a) {
  if (trader.onError) trader.onError(a);
};
StarWebPrintTrader.prototype.isCoverOpen = function (a) {
  return parseInt(a.traderStatus.substr(4, 2), 16) & 32 ? !0 : !1;
};
StarWebPrintTrader.prototype.isOffLine = function (a) {
  return parseInt(a.traderStatus.substr(4, 2), 16) & 8 ? !0 : !1;
};
StarWebPrintTrader.prototype.isCompulsionSwitchClose = function (a) {
  return parseInt(a.traderStatus.substr(4, 2), 16) & 4 ? !0 : !1;
};
StarWebPrintTrader.prototype.isEtbCommandExecute = function (a) {
  return parseInt(a.traderStatus.substr(4, 2), 16) & 2 ? !0 : !1;
};
StarWebPrintTrader.prototype.isHighTemperatureStop = function (a) {
  return parseInt(a.traderStatus.substr(6, 2), 16) & 64 ? !0 : !1;
};
StarWebPrintTrader.prototype.isNonRecoverableError = function (a) {
  return parseInt(a.traderStatus.substr(6, 2), 16) & 32 ? !0 : !1;
};
StarWebPrintTrader.prototype.isAutoCutterError = function (a) {
  return parseInt(a.traderStatus.substr(6, 2), 16) & 8 ? !0 : !1;
};
StarWebPrintTrader.prototype.isBlackMarkError = function (a) {
  return parseInt(a.traderStatus.substr(8, 2), 16) & 8 ? !0 : !1;
};
StarWebPrintTrader.prototype.isPaperEnd = function (a) {
  return parseInt(a.traderStatus.substr(10, 2), 16) & 8 ? !0 : !1;
};
StarWebPrintTrader.prototype.isPaperNearEnd = function (a) {
  return parseInt(a.traderStatus.substr(10, 2), 16) & 4 ? !0 : !1;
};
StarWebPrintTrader.prototype.isPaperPresent = function (a) {
  return parseInt(a.traderStatus.substr(12, 2), 16) & 2 ? !0 : !1;
};
StarWebPrintTrader.prototype.extractionEtbCounter = function (a) {
  var b = 0;
  parseInt(a.traderStatus.substr(14, 2), 16) & 64 && (b |= 16);
  parseInt(a.traderStatus.substr(14, 2), 16) & 32 && (b |= 8);
  parseInt(a.traderStatus.substr(14, 2), 16) & 8 && (b |= 4);
  parseInt(a.traderStatus.substr(14, 2), 16) & 4 && (b |= 2);
  parseInt(a.traderStatus.substr(14, 2), 16) & 2 && (b |= 1);
  return b;
};
StarWebPrintTrader.prototype._encodeEscapeSequence = function (a) {
  var b = /[<>&]/g;
  b.test(a) &&
    (a = a.replace(b, function (a) {
      switch (a) {
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
      }
      return "&amp;";
    }));
  return a;
};

class WebPrintDriver extends PrintDriver {
    constructor(url, useSecure = false) {
        super();
        this.isConnected = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.useSecure = false;
        this.isStarPrinter = false;
        this.url = url;
        this.useSecure = useSecure;
    }
    connect() {
        const useSecure = (this.useSecure) ? 's' : '';
        this.trader = new StarWebPrintTrader({ url: `http${useSecure}://${this.url}/StarWebPRNT/SendMessage` });
        this.trader.onReceive = (response) => {
            this.isConnected.next(true);
        };
        this.trader.onError = (response) => {
            this.isConnected.next(false);
        };
        this.trader.sendMessage('');
    }
    write(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function* () {
            this.trader.sendMessage({ request: data });
        });
    }
}

class UsbDriver extends PrintDriver {
    constructor(vendorId, productId) {
        super();
        this.isConnected = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.vendorId = vendorId;
        this.productId = productId;
    }
    connect() {
        navigator.usb.getDevices().then(devices => {
            this.device = devices.find((device) => {
                return device.vendorId === this.vendorId && device.productId === this.productId;
            });
            console.log(this.device);
            return this.device.open();
        })
            .then(() => {
            let result = this.device.selectConfiguration(1);
            return result;
        })
            .then(() => {
            let result = this.device.claimInterface(0);
            return result;
        }).then(result => {
            const endPoints = this.device.configuration.interfaces[0].alternate.endpoints;
            this.endPoint = endPoints.find((endPoint) => endPoint.direction === 'out');
            this.isConnected.next(true);
            this.listenForUsbConnections();
        }).catch(result => {
            this.isConnected.next(false);
        });
    }
    /**
     * Request a USB device through the browser
     * return Observable<USBDevice>
     */
    requestUsb() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](observer => {
            navigator.usb.requestDevice({ filters: [] })
                .then((result) => {
                this.vendorId = result.vendorId;
                this.productId = result.productId;
                return observer.next(result);
            }).catch(error => {
                return observer.error(error);
            });
        });
    }
    write(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function* () {
            this.device.transferOut(this.endPoint.endpointNumber, data);
        });
    }
    listenForUsbConnections() {
        navigator.usb.addEventListener('disconnect', () => {
            this.isConnected.next(false);
        });
        navigator.usb.addEventListener('connect', () => {
            this.isConnected.next(true);
        });
    }
}

class ThermalPrintModule {
}
ThermalPrintModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [],
                declarations: [],
                exports: []
            },] }
];

/*
 * Public API Surface of ng-thermal-print
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ng-thermal-print.js.map


/***/ }),

/***/ "./node_modules/ng-thermal-print/node_modules/tslib/tslib.es6.js":
/*!***********************************************************************!*\
  !*** ./node_modules/ng-thermal-print/node_modules/tslib/tslib.es6.js ***!
  \***********************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArray", function() { return __spreadArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ })

}]);
//# sourceMappingURL=default~views-credit-memo-credit-memo-module~views-sales-management-sales-management-module.js.map