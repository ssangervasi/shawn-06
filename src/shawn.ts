var receivedPhrases: Set<string> = new Set()

const rephrase = (phrase: string, _pedantic: boolean = false): string => {
	if (receivedPhrases.has(phrase)) {
		return "Never send me that atrocious sentence again."
	} else {
		receivedPhrases.add(phrase)
	}

	phrase = replace(phrase, /ss/g, "s")
	phrase = replaceAt(phrase, /s[aeiou]/g, 1, "sh")
	phrase = replace(phrase, /(sh){2,}/g, "sh")
	phrase = replaceAt(phrase, /c[iey]/g, 1, "sh")
	phrase = replaceAt(phrase, /C[iey]/g, 1, "Sh")
	phrase = replace(phrase, /SS/g, "S")
	phrase = replace(phrase, /SH/g, "Sh")
	phrase = replace(phrase, /Ss/g, "Sh")
	phrase = replace(phrase, /S(?!h)/g, "Sh")
	phrase = replace(phrase, /hh/g, "h")
	phrase = replaceAt(phrase, /sSh/g, 2, "s")
	phrase = replace(phrase, /ea/g, "aw")

	return phrase
}

const replace = (phrase: string, searchRegExp: RegExp, replacement: string) => {
	while(phrase.search(searchRegExp) != -1) {
		phrase = phrase.replace(searchRegExp, replacement)
	}
	return phrase
}

const replaceAt = (phrase: string, searchRegExp: RegExp, removalCharacters: number, replacement: string) => {
	let index = phrase.search(searchRegExp)
	while(index != -1) {
		phrase = replaceAtHelper(phrase, index, removalCharacters, replacement)
		index = phrase.search(searchRegExp)
	}
	return phrase
}

const replaceAtHelper = (str: string, index: number, lengthToReplace: number = 1, replacement: string) => {
	return str.substr(0, index) + replacement + str.substr(index + lengthToReplace);
}

export { rephrase }
