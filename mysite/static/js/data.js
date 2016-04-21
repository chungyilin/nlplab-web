// DATA
var EXAMPLE = {
    "CMD": [
        "adj. beach", 
        "cultivate n.",
        "v. an/a adj. role", 
        // "take $D ... trip", 
        "go ?to home", 
        "how to v. n.",
        "play det. ~important role/part"
        
    ],
    "HLI": [
        "How to describe beach?", 
        // "Which is popular stay at home or stay to home?",
        "Describe beach",
        // "Which one is better do research or conduct research?",
        // "Which expression is correct, go home or go to home?",
        "Which is correct, go home or go to home?",
        "What verb goes with an important role?",
        "What preposition should be used after analysis?",
    ]
};
var HELP = {
    "CMD": [
        {"<span>_</span>"           :   "search for <span>any</span> word 搜尋任意一個字詞"},
        {"<span>~</span><m>Term</m>":   "search for the <span>similar</span> words of <m>Term</m> 搜尋同義詞"},
        // {"<span>~</span><m>Term</m><span>#N</span>":   "the top N <span>similar</span> words of <m>Term</m>"},
        {"<span>?</span><m>Term</m>":   "search for <m>Term</m> <span>optionally</span> 檢查是否需要此字"},
        {"<span>*</span>"         :   "match <span>zero or more</span> words 搜尋零至多個字詞"},
        {"Term1<span>/</span>Term2" :   "with either Term1 <span>or</span> Term2 替換字詞"},
        {"<span>part-of-speech</span>"        :   "search for word with specific part-of-speech. 搭配詞性搜尋<br><br><span>v.</span>(verb), <span>n.</span>(noun), <span>adj.</span>(adjective), <span>adv.</span>(adverb) and <span>prep.</span>(preposition), <span>det.</span>(determiner), <span>conj.</span>(conjunction), <span>pron.</span>(pronoun), <span>interj.</span>(interjection)"},
        {"<span>note</span>" : "the maximum number of words in a query is <span>5</span>. 至多可以搜尋五個字詞"},
    ],
    "HLI": [
        {"<span>Which</span>"       :   "Which ____ is ____, <span>item A</span> or <span>item B</span>"},
        {"<span>How</span>"         :   "How to ____ <span>item A</span>?"},
        {"<span>What</span>"        :   "What <span>$POS</span> ____ after/before/with  <span>item A</span>?<br><br>$POS can be verb, noun, adjective, adverb or preposition, determiner"},
    ]
}
var sents = [
    "Sandy Beach contains two distinct game modes", 
    "Sandy Beach (Beach de Oshiro wo Tsukutcha Wow! in Japan)", 
    "Sandy Beach is a video game developed by Frozen Codebase and published by Konami Frozen Codebase and published by Konami"
]
