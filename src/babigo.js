const kanaMap = {
  // あ
  あ: 'ば',
  い: 'び',
  う: 'ぶ',
  え: 'べ',
  お: 'ぼ',
  // か
  か: 'ば',
  き: 'び',
  く: 'ぶ',
  け: 'べ',
  こ: 'ぼ',
  // さ
  さ: 'ば',
  し: 'び',
  す: 'ぶ',
  せ: 'べ',
  そ: 'ぼ',
  // た
  た: 'ば',
  ち: 'び',
  つ: 'ぶ',
  て: 'べ',
  と: 'ぼ',
  // な
  な: 'ば',
  に: 'び',
  ぬ: 'ぶ',
  ね: 'べ',
  の: 'ぼ',
  // は
  は: 'ば',
  ひ: 'び',
  ふ: 'ぶ',
  へ: 'べ',
  ほ: 'ぼ',
  // ま
  ま: 'ば',
  み: 'び',
  む: 'ぶ',
  も: 'べ',
  も: 'ぼ',
  // や
  や: 'ば',
  ゆ: 'ぶ',
  よ: 'ぼ',
  // ら
  ら: 'ば',
  り: 'び',
  る: 'ぶ',
  れ: 'べ',
  ろ: 'ぼ',
  // わ
  わ: 'ば',
  を: 'ぼ',
  ん: null,
  // 濁音(か、さ、た、は)
  // が
  が: 'ば',
  ぎ: 'び',
  ぐ: 'ぶ',
  げ: 'べ',
  ご: 'ぼ',
  // ざ
  ざ: 'ば',
  じ: 'び',
  ず: 'ぶ',
  ぜ: 'べ',
  ぞ: 'ぼ',
  // だ
  だ: 'ば',
  ぢ: 'び',
  づ: 'ぶ',
  で: 'べ',
  ど: 'ぼ',
  // ば
  ば: 'ば',
  び: 'び',
  ぶ: 'ぶ',
  べ: 'べ',
  ぼ: 'ぼ',
  // ば
  ぱ: 'ば',
  ぴ: 'び',
  ぷ: 'ぶ',
  ぺ: 'べ',
  ぽ: 'ぼ',
  // 拗音
  ぁ: 'ば',
  ぃ: 'ぶ',
  ぅ: 'ぼ',
  ぇ: 'ば',
  ぉ: 'ぶ',
  ゃ: 'ば',
  ゅ: 'ぶ',
  ょ: 'ぼ',
};

export function translate(sentence) {
  let translated = [];
  let prev = null;
  for (const i in [...sentence, null, null]) {
    // 2文字セットで判定する
    if (!prev) {
      prev = sentence[i];
      continue;
    }
    const current = sentence[i];

    if (['ゃ', 'ゅ', 'ょ'].includes(current)) {
      // 拗音の場合
      // prevはそのままで、currentだけ処理する
      translated.push(prev);
      translated.push(current);
      if (kanaMap[current]) {
        translated.push(kanaMap[current]);
      }
      prev = null;
    } else if (current === 'ー') {
      // 長音の場合
      // prevとcurrentを同時に処理する
      translated.push(prev);
      const s = kanaMap[prev];
      if (s) {
        translated.push(s);
      }
      translated.push(current);
      translated.push(s);
      prev = null;
    } else {
      // 通常パターンの場合
      // prevだけ処理する
      translated.push(prev);
      if (kanaMap[prev]) {
        translated.push(kanaMap[prev]);
      }
      prev = current;
    }
  }
  return translated.join('');
}
