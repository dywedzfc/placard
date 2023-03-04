import _ from 'lodash'

export function codeType(type: string, data: string): string {
  if ('js' === type) {
    return codeToStringJSTag(data)
  } else if ('css' === type) {
    return codeToStringCssTag(data)
  }
  return codeToStringHtmlTag(data)
}
export function codeClassName(type: string): string {
  // if ('js' === item.type) return codeToStringJSTag(item.data)
  if ('css' === type) {
    return 'code-style-tag'
  }
  return 'code-html-tag'
}
export function codeToStringHtmlTag(code: string): string {
  const tagReg = /(&lt;\/?)([a-zA-Z\-]+)/g
  const centerReg = /{{([a-zA-Z0-9.\-_]+)}}/g
  const tagReplace = '$1<span class="code-html-name">$2</span>'
  const attributesReg = /\s{1}(([a-zA-Z\-]+)|([@:#][a-zA-Z.\-]+))((=)"([\u4E00-\u9FA5a-zA-Z0-9.\-_ ]+))?/g
  let value = code.replace(/</g, '&lt;')
  value = value.replace(/>/g, '&gt;')
  value = value.replace(/{{\s+([a-zA-Z0-9.\-_]+)\s+}}/g, '{{$1}}')
  value = value.replace(attributesReg, (item, key, key1, key2, _value, mark, _v) => {
    let data = ` <span class="code-html-name">${key}</span>`
    if (_value) {
      data += `${mark}"<span class="code-html-string">${_v}</span>`
    }
    return data
  })
  value = value.replace(centerReg, '{{ <span class="code-html-string">$1</span> }}')
  value = value.replace(tagReg, tagReplace)
  return value
}
export function codeToStringJSTag(code: string): string {
  type stringCodeType = (_: string, v: string) => string
  const numberRag = /([0-9]+(.[0-9]+)?)/g
  const booleanRag = /((true)|(false))/g
  const attrRag = /([a-zA-Z0-9]+)([:(])/g
  const stringRag = /['"]([\u4E00-\u9FA5a-zA-Z0-9%.]+)['"]/g
  const keywordRag =
    /((export)|(import)|(from)|(default)|(return)|(this)|(const)|(let)|(var)|(if)|(else)|(forEach)|(for)|(do)|(while)|(switch)|(case)|(break)|(continue))/g
  const stringCode: stringCodeType = (_, v) => `'<span class="code-js-string">${v}</span>'`
  let value = code.replace(keywordRag, '<span class="code-js-keyword">$1</span>')
  value = value.replace(attrRag, '<span class="code-js-attr">$1</span>$2')
  value = value.replace(/\.([a-zA-Z0-9\-_]+)/g, '.<span class="code-js-attr">$1</span>')
  if (stringRag.test(value)) {
    value = value.replace(stringRag, stringCode)
  } else {
    value = value.replace(booleanRag, '<span class="code-js-keyword">$1</span>')
    value = value.replace(numberRag, '<span class="code-js-number">$1</span>')
  }
  return value
}
export function codeToStringCssTag(code: string): string {
  const numberRag =
    /((#[0-9a-fA-F]{8})|(#[0-9a-fA-F]{6})|(#[0-9a-fA-F]{3})|([ ][0-9]+((px)|(pt)|(pc)|(in)|(mm)|(cm)|(em)|(rem)|(ex)|(ch)|(vw)|(vh)|(vmin)|(vmax)|%)?))/g
  const classRag = /((&:|-)?[a-zA-Z0-9.#\-_=\[\]\^&$\(\) ]+)::/g
  const classRag1 = /((&:|-)?[a-zA-Z0-9.#\-_=\[\]\^&$\(\) ]+)[ ]*[\{]/g
  const classRag2 = /((&:|-)?[a-zA-Z0-9.#\-_=\[\]\^&$\(\) ]+)[ ]*,/g
  const attrRag = /([a-zA-Z0-9\-]+)(:)/g
  const valueRag = /([a-zA-Z\-]+);/g
  const valueRag2 = /[ ]([a-zA-Z\-]+)[ ]/g
  const keywordRag = /((inherit)|(none)|(!important));/g
  const stringRag = /(['"])(.+)(['"])/g
  // let value = code.replace(classRag, '<span class="code-style-selector">$1</span>::')
  let value = code.replace(stringRag, '$1<span class="code-style-value">$2</span>$3')
  value = value.replace(classRag, '<span class="code-style-selector">$1</span>::')
  value = value.replace(classRag1, '<span class="code-style-selector">$1</span> {')
  value = value.replace(classRag2, '<span class="code-style-selector">$1</span>,')
  value = value.replace(attrRag, '<span class="code-style-attr">$1</span>:')
  value = value.replace(numberRag, '<span class="code-style-number">$1</span>')
  value = value.replace(keywordRag, '<span class="code-style-keyword">$1</span>;')
  value = value.replace(valueRag, '<span class="code-style-value">$1</span>;')
  value = value.replace(valueRag2, ' <span class="code-style-value">$1</span> ')
  return value
}

export function capitalize(text: string, excision = false): string {
  if (text.split('-').length > 1) {
    const list = text.split('-')
    if (excision && list.length > 0 && list[0].length === 1) {
      list.shift()
    }
    return _.map(list, (text: any) => text.substring(0, 1).toUpperCase() + text.substring(1)).join('')
  }
  return text.substring(0, 1).toUpperCase() + text.substring(1)
}
