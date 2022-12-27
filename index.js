var wordList = [
  // Borrowed from xkcd password generator which borrowed it from wherever
  "ability","able","aboard","about","above","accept","accident","according",
  "account","accurate","acres","across","act","action","active","activity",
  "actual","actually","add","addition","additional","adjective","adult","adventure",
  "advice","affect","afraid","after","afternoon","again","against","age",
  "ago","agree","ahead","aid","air","airplane","alike","alive",
  "all","allow","almost","alone","along","aloud","alphabet","already",
  "also","although","am","among","amount","ancient","angle","angry",
  "animal","announced","another","answer","ants","any","anybody","anyone",
  "anything","anyway","anywhere","apart","apartment","appearance","apple","applied",
  "appropriate","are","area","arm","army","around","arrange","arrangement",
  "arrive","arrow","art","article","as","aside","ask","asleep",
  "at","ate","atmosphere","atom","atomic","attached","attack","attempt",
  "attention","audience","author","automobile","available","average","avoid","aware",
  "away","baby","back","bad","badly","bag","balance","ball",
  "balloon","band","bank","bar","bare","bark","barn","base",
  "baseball","basic","basis","basket","bat","battle","be","bean",
  "bear","beat","beautiful","beauty","became","because","become","becoming",
  "bee","been","before","began","beginning","begun","behavior","behind",
  "being","believed","bell","belong","below","belt","bend","beneath",
  "bent","beside","best","bet","better","between","beyond","bicycle",
  "bigger","biggest","bill","birds","birth","birthday","bit","bite",
  "black","blank","blanket","blew","blind","block","blood","blow",
  "blue","board","boat","body","bone","book","border","born",
  "both","bottle","bottom","bound","bow","bowl","box","boy",
  "brain","branch","brass","brave","bread","break","breakfast","breath",
  "breathe","breathing","breeze","brick","bridge","brief","bright","bring",
  "broad","broke","broken","brother","brought","brown","brush","buffalo",
  "build","building","built","buried","burn","burst","bus","bush",
  "business","busy","but","butter","buy","by","cabin","cage",
  "cake","call","calm","came","camera","camp","can","canal",
  "cannot","cap","capital","captain","captured","car","carbon","card",
  "care","careful","carefully","carried","carry","case","cast","castle",
  "cat","catch","cattle","caught","cause","cave","cell","cent",
  "center","central","century","certain","certainly","chain","chair","chamber",
  "chance","change","changing","chapter","character","characteristic","charge","chart",
  "check","cheese","chemical","chest","chicken","chief","child","children",
  "choice","choose","chose","chosen","church","circle","circus","citizen",
  "city","class","classroom","claws","clay","clean","clear","clearly",
  "climate","climb","clock","close","closely","closer","cloth","clothes",
  "clothing","cloud","club","coach","coal","coast","coat","coffee",
  "cold","collect","college","colony","color","column","combination","combine",
  "come","comfortable","coming","command","common","community","company","compare",
  "compass","complete","completely","complex","composed","composition","compound","concerned",
  "condition","congress","connected","consider","consist","consonant","constantly","construction",
  "contain","continent","continued","contrast","control","conversation","cook","cookies",
  "cool","copper","copy","corn","corner","correct","correctly","cost",
  "cotton","could","count","country","couple","courage","course","court",
  "cover","cow","cowboy","crack","cream","create","creature","crew",
  "crop","cross","crowd","cry","cup","curious","current","curve",
  "customs","cut","cutting","daily","damage","dance","danger","dangerous",
  "dark","darkness","date","daughter","dawn","day","dead","deal",
  "dear","death","decide","declared","deep","deeply","deer","definition",
  "degree","depend","depth","describe","desert","design","desk","detail",
  "determine","develop","development","diagram","diameter","did","die","differ",
  "difference","different","difficult","difficulty","dig","dinner","direct","direction",
  "directly","dirt","dirty","disappear","discover","discovery","discuss","discussion",
  "disease","dish","distance","distant","divide","division","do","doctor",
  "does","dog","doing","doll","dollar","done","donkey","door",
  "dot","double","doubt","down","dozen","draw","drawn","dream",
  "dress","drew","dried","drink","drive","driven","driver","driving",
  "drop","dropped","drove","dry","duck","due","dug","dull",
  "during","dust","duty","each","eager","ear","earlier","early",
  "earn","earth","easier","easily","east","easy","eat","eaten",
  "edge","education","effect","effort","egg","eight","either","electric",
  "electricity","element","elephant","eleven","else","empty","end","enemy",
  "energy","engine","engineer","enjoy","enough","enter","entire","entirely",
  "environment","equal","equally","equator","equipment","escape","especially","essential",
  "establish","even","evening","event","eventually","ever","every","everybody",
  "everyone","everything","everywhere","evidence","exact","exactly","examine","example",
  "excellent","except","exchange","excited","excitement","exciting","exclaimed","exercise",
  "exist","expect","experience","experiment","explain","explanation","explore","express",
  "expression","extra","eye","face","facing","fact","factor","factory",
  "failed","fair","fairly","fall","fallen","familiar","family","famous",
  "far","farm","farmer","farther","fast","fastened","faster","fat",
  "father","favorite","fear","feathers","feature","fed","feed","feel",
  "feet","fell","fellow","felt","fence","few","fewer","field",
  "fierce","fifteen","fifth","fifty","fight","fighting","figure","fill",
  "film","final","finally","find","fine","finest","finger","finish",
  "fire","fireplace","firm","first","fish","five","fix","flag",
  "flame","flat","flew","flies","flight","floating","floor","flow",
  "flower","fly","fog","folks","follow","food","foot","football",
  "for","force","foreign","forest","forget","forgot","forgotten","form",
  "former","fort","forth","forty","forward","fought","found","four",
  "fourth","fox","frame","free","freedom","frequently","fresh","friend",
  "friendly","frighten","frog","from","front","frozen","fruit","fuel",
  "full","fully","fun","function","funny","fur","furniture","further",
  "future","gain","game","garage","garden","gas","gasoline","gate",
  "gather","gave","general","generally","gentle","gently","get","getting",
  "giant","gift","girl","give","given","giving","glad","glass",
  "globe","go","goes","gold","golden","gone","good","goose",
  "got","government","grabbed","grade","gradually","grain","grandfather","grandmother",
  "graph","grass","gravity","gray","great","greater","greatest","greatly",
  "green","grew","ground","group","grow","grown","growth","guard",
  "guess","guide","gulf","gun","habit","had","hair","half",
  "halfway","hall","hand","handle","handsome","hang","happen","happened",
  "happily","happy","harbor","hard","harder","hardly","has","hat",
  "have","having","hay","he","headed","heading","health","heard",
  "hearing","heart","heat","heavy","height","held","hello","help",
  "helpful","her","herd","here","herself","hidden","hide","high",
  "higher","highest","highway","hill","him","himself","his","history",
  "hit","hold","hole","hollow","home","honor","hope","horn",
  "horse","hospital","hot","hour","house","how","however","huge",
  "human","hundred","hung","hungry","hunt","hunter","hurried","hurry",
  "hurt","husband","ice","idea","identity","if","ill","image",
  "imagine","immediately","importance","important","impossible","improve","in","inch",
  "include","including","income","increase","indeed","independent","indicate","individual",
  "industrial","industry","influence","information","inside","instance","instant","instead",
  "instrument","interest","interior","into","introduced","invented","involved","iron",
  "is","island","it","its","itself","jack","jar","jet",
  "job","join","joined","journey","joy","judge","jump","jungle",
  "just","keep","kept","key","kids","kill","kind","kitchen",
  "knew","knife","know","knowledge","known","label","labor","lack",
  "lady","laid","lake","lamp","land","language","large","larger",
  "largest","last","late","later","laugh","law","lay","layers",
  "lead","leader","leaf","learn","least","leather","leave","leaving",
  "led","left","leg","length","lesson","let","letter","level",
  "library","lie","life","lift","light","like","likely","limited",
  "line","lion","lips","liquid","list","listen","little","live",
  "living","load","local","locate","location","log","lonely","long",
  "longer","look","loose","lose","loss","lost","lot","loud",
  "love","lovely","low","lower","luck","lucky","lunch","lungs",
  "lying","machine","machinery","mad","made","magic","magnet","mail",
  "main","mainly","major","make","making","man","managed","manner",
  "manufacturing","many","map","mark","market","married","mass","massage",
  "master","material","mathematics","matter","may","maybe","me","meal",
  "mean","means","meant","measure","meat","medicine","meet","melted",
  "member","memory","men","mental","merely","met","metal","method",
  "mice","middle","might","mighty","mile","military","milk","mill",
  "mind","mine","minerals","minute","mirror","missing","mission","mistake",
  "mix","mixture","model","modern","molecular","moment","money","monkey",
  "month","mood","moon","more","morning","most","mostly","mother",
  "motion","motor","mountain","mouse","mouth","move","movement","movie",
  "moving","mud","muscle","music","musical","must","my","myself",
  "mysterious","nails","name","nation","national","native","natural","naturally",
  "nature","near","nearby","nearer","nearest","nearly","necessary","neck",
  "needed","needle","needs","negative","neighbor","neighborhood","nervous","nest",
  "never","new","news","newspaper","next","nice","night","nine",
  "no","nobody","nodded","noise","none","noon","nor","north",
  "nose","not","note","noted","nothing","notice","noun","now",
  "number","numeral","nuts","object","observe","obtain","occasionally","occur",
  "ocean","of","off","offer","office","officer","official","oil",
  "old","older","oldest","on","once","one","only","onto",
  "open","operation","opinion","opportunity","opposite","or","orange","orbit",
  "order","ordinary","organization","organized","origin","original","other","ought",
  "our","ourselves","out","outer","outline","outside","over","own",
  "owner","oxygen","pack","package","page","paid","pain","paint",
  "pair","palace","pale","pan","paper","paragraph","parallel","parent",
  "park","part","particles","particular","particularly","partly","parts","party",
  "pass","passage","past","path","pattern","pay","peace","pen",
  "pencil","people","per","percent","perfect","perfectly","perhaps","period",
  "person","personal","pet","phrase","physical","piano","pick","picture",
  "pictured","pie","piece","pig","pile","pilot","pine","pink",
  "pipe","pitch","place","plain","plan","plane","planet","planned",
  "planning","plant","plastic","plate","plates","play","pleasant","please",
  "pleasure","plenty","plural","plus","pocket","poem","poet","poetry",
  "point","pole","police","policeman","political","pond","pony","pool",
  "poor","popular","population","porch","port","position","positive","possible",
  "possibly","post","pot","potatoes","pound","pour","powder","power",
  "powerful","practical","practice","prepare","present","president","press","pressure",
  "pretty","prevent","previous","price","pride","primitive","principal","principle",
  "printed","private","prize","probably","problem","process","produce","product",
  "production","program","progress","promised","proper","properly","property","protection",
  "proud","prove","provide","public","pull","pupil","pure","purple",
  "purpose","push","put","putting","quarter","queen","question","quick",
  "quickly","quiet","quietly","quite","rabbit","race","radio","railroad",
  "rain","raise","ran","ranch","range","rapidly","rate","rather",
  "raw","rays","reach","read","reader","ready","real","realize",
  "rear","reason","recall","receive","recent","recently","recognize","record",
  "red","refer","refused","region","regular","related","relationship","religious",
  "remain","remarkable","remember","remove","repeat","replace","replied","report",
  "represent","require","research","respect","rest","result","return","review",
  "rhyme","rhythm","rice","rich","ride","riding","right","ring",
  "rise","rising","river","road","roar","rock","rocket","rocky",
  "rod","roll","roof","room","root","rope","rose","rough",
  "round","route","row","rubbed","rubber","rule","ruler","run",
  "running","rush","sad","saddle","safe","safety","said","sail",
  "sale","salmon","salt","same","sand","sang","sat","satellites",
  "satisfied","save","saved","saw","say","scale","scared","scene",
  "school","science","scientific","scientist","score","screen","sea","search",
  "season","seat","second","secret","section","see","seed","seeing",
  "seems","seen","seldom","select","selection","sell","send","sense",
  "sent","sentence","separate","series","serious","serve","service","sets",
  "setting","settle","settlers","seven","several","shade","shadow","shake",
  "shaking","shall","shallow","shape","share","sharp","she","sheep",
  "sheet","shelf","shells","shelter","shine","shinning","ship","shirt",
  "shoe","shoot","shop","shore","short","shorter","shot","should",
  "shoulder","shout","show","shown","shut","sick","sides","sight",
  "sign","signal","silence","silent","silk","silly","silver","similar",
  "simple","simplest","simply","since","sing","single","sink","sister",
  "sit","sitting","situation","six","size","skill","skin","sky",
  "slabs","slave","sleep","slept","slide","slight","slightly","slip",
  "slipped","slope","slow","slowly","small","smaller","smallest","smell",
  "smile","smoke","smooth","snake","snow","so","soap","social",
  "society","soft","softly","soil","solar","sold","soldier","solid",
  "solution","solve","some","somebody","somehow","someone","something","sometime",
  "somewhere","son","song","soon","sort","sound","source","south",
  "southern","space","speak","special","species","specific","speech","speed",
  "spell","spend","spent","spider","spin","spirit","spite","split",
  "spoken","sport","spread","spring","square","stage","stairs","stand",
  "standard","star","stared","start","state","statement","station","stay",
  "steady","steam","steel","steep","stems","step","stepped","stick",
  "stiff","still","stock","stomach","stone","stood","stop","stopped",
  "store","storm","story","stove","straight","strange","stranger","straw",
  "stream","street","strength","stretch","strike","string","strip","strong",
  "stronger","struck","structure","struggle","stuck","student","studied","studying",
  "subject","substance","success","successful","such","sudden","suddenly","sugar",
  "suggest","suit","sum","summer","sun","sunlight","supper","supply",
  "support","suppose","sure","surface","surprise","surrounded","swam","sweet",
  "swept","swim","swimming","swing","swung","syllable","symbol","system",
  "table","tail","take","taken","tales","talk","tall","tank",
  "tape","task","taste","taught","tax","tea","teach","teacher",
  "team","tears","teeth","telephone","television","tell","temperature","ten",
  "tent","term","terrible","test","than","thank","that","thee",
  "them","themselves","then","theory","there","therefore","these","they",
  "thick","thin","thing","think","third","thirty","this","those",
  "thou","though","thought","thousand","thread","three","threw","throat",
  "through","throughout","throw","thrown","thumb","thus","thy","tide",
  "tie","tight","tightly","till","time","tin","tiny","tip",
  "tired","title","to","tobacco","today","together","told","tomorrow",
  "tone","tongue","tonight","too","took","tool","top","topic",
  "torn","total","touch","toward","tower","town","toy","trace",
  "track","trade","traffic","trail","train","transportation","trap","travel",
  "treated","tree","triangle","tribe","trick","tried","trip","troops",
  "tropical","trouble","truck","trunk","truth","try","tube","tune",
  "turn","twelve","twenty","twice","two","type","typical","uncle",
  "under","underline","understanding","unhappy","union","unit","universe","unknown",
  "unless","until","unusual","up","upon","upper","upward","us",
  "use","useful","using","usual","usually","valley","valuable","value",
  "vapor","variety","various","vast","vegetable","verb","vertical","very",
  "vessels","victory","view","village","visit","visitor","voice","volume",
  "vote","vowel","voyage","wagon","wait","walk","wall","want",
  "war","warm","warn","was","wash","waste","watch","water",
  "wave","way","we","weak","wealth","wear","weather","week",
  "weigh","weight","welcome","well","went","were","west","western",
  "wet","whale","what","whatever","wheat","wheel","when","whenever",
  "where","wherever","whether","which","while","whispered","whistle","white",
  "who","whole","whom","whose","why","wide","widely","wife",
  "wild","will","willing","win","wind","window","wing","winter",
  "wire","wise","wish","with","within","without","wolf","women",
  "won","wonder","wonderful","wood","wooden","wool","word","wore",
  "work","worker","world","worried","worry","worse","worth","would",
  "wrapped","write","writer","writing","written","wrong","wrote","yard",
  "year","yellow","yes","yesterday","yet","you","young","younger",
  "your","yourself","youth","zero","zebra","zipper","zoo","zulu","Alabama",
  ,"count","history","fortieth","finished","still","Britain","leader","spent","plane","beat"
  ,"deal","current","worth","melody","weather","Berlin","Alabama","members","property","long",
,"would","above","plane","Denmark","stood","continue","covered","when","pole","winter","nerve","speak",
"whether","feet","northern","held","opinion","past","ball","train","able", "acid", "also", "area", "army", "away", "baby", "back", "ball", "band", "bank", "base", "bath", "bear", "beat", "been", "before", "begin", "bell", "best", "bill", "bird", "bite", "blue", "boat", "body", "bomb", "bond", "bone", "book", "born", "both", "bowl", "buzz", "cage", "cake", "call", "calm", "came", "card", "care", "case", "cast", "cell", "cent", "chat", "chip", "city", "claw", "clay", "clean", "clear", "cloak", "clock", "cloth", "cloud", "club", "coal", "coat", "code", "coin", "cold", "come", "cook", "cool", "cope", "copy", "core", "cost", "Crew", "crop", "cube", "cure", "curl", "dark", "date", "dawn", "days", "dead", "deal", "dean", "dear", "debt", "deep", "deny", "desk", "dial", "died", "diet", "doct", "does", "door", "down", "draw", "drew", "drug", "dual", "duck", "duty", "each", "earn", "ease", "east", "easy", "edge", "else", "even", "ever", "evil", "exit", "face", "fact", "fail", "fair", "fall", "fame", "farm", "fast", "fate", "fear", "feed", "feel", "feet", "fell", "felt", "fern", "fewer", "flee", "flew", "flip", "flow", "food", "foot", "ford", "form", "fort", "four", "free", "from", "fuel", "full", "fund", "gain", "game", "gate", "gave", "gear", "gene", "gift", "girl", "give", "glad", "glass", "globe", "glow", "goat", "gold", "good", "gown", "grab", "gray", "green", "grew", "grin", "grip", "grow", "grown", "gulf", "hair", "half", "hall", "hand", "hang", "hard", "harm", "hate", "have", "hear", "heat", "held", "hell", "help", "herd", "here", "hero", "hill", "hire", "hold", "hole", "home", "hope", "horn", "host", "hour", "howl", "huge", "hung", "hunt", "hurry", "hurt", "idea", "into", "iron", "item", "jack", "jerk", "joke", "jolt", "jump", "jury", "keep", "knew", "know", "lack", "lady", "laid", "lake", "land", "lane", "last", "late", "laud", "lead", "leaf", "leak", "lean", "leap", "less", "lest",
"aboard", "ability", "acquire", "across", "action", "address", "advance", "advisor", "afflict", "afraid", "against", "airport", "alarmed", "algebra", "alkaline", "alleged", "already", "although", "amazing", "amount", "amplify", "ancient", "ankle", "annoyed", "another", "answer", "anymore", "apology", "appear", "approve", "archery", "arrival", "artist", "asleep", "assemble", "attack", "attempt", "attend", "august", "average", "awesome", "awkward", "backing", "balance", "balcony", "bamboo", "banquet", "barren", "battle", "beauty", "because", "become", "bedroom", "before", "behold", "believe", "beneath", "benefit", "beware", "beyond", "bicycle", "billing", "biscuit", "bitters", "bizarre", "blacken", "blaming", "bleak", "bleed", "blender", "blissful", "blossom", "blunder", "boarder", "bouncing", "bouncing", "breeze", "brevity", "bright", "brisket", "bronze", "brooding", "bruised", "bumped", "bundle", "burden", "bustle", "butcher", "butter", "cactus", "calmly", "camper", "cancel", "candle", "candy", "canyon", "capital", "captain", "caution", "ceiling", "centaur", "certain", "chalked", "champion", "channel", "charge", "chase", "cheaper", "chewier", "chicken", "chimney", "choir", "chosen", "circles", "citizen", "claimed", "clarity", "claws", "climbed", "cloak", "clumsy", "coaster", "coconut", "coffin", "college", "coltish", "column", "combine", "coming", "command", "common", "compare", "compete", "concede", "concern", "condemn", "confess", "confirm", "confuse", "consent", "consume", "contain", "contend", "continue", "contrast", "control", "convert", "copper", "corridor", "cotton", "couple", "cousin", "cozy", "crackle", "crashed", "crawdad", "create", "crevice", "cricket", "criminal", "crisply", "critter", "cruelty", "crumble", "cuddle", "currency", "cursor", "custard", "cuticle", "cutlass", "dazzle", "debtors", "decency", "decision", "decrease", "defeat", "defend", "degree", "delight", "deliver", "demand", "deposit", "deserve", "desire", "despair", "destroy", "device", "devote", "diagram",
"diamond", "different", "digest", "digital", "dilute", "diluted", "diluting", "diploma", "dipped", "direct", "disagree", "discover", "disease", "display", "distance", "diverge", "divorce", "doctor", "dodging", "dolphin", "dominant", "donate", "double", "doubles", "doubtful", "downing", "dragon", "dreamer", "dressed", "drink", "driver", "drummer", "dueling", "dumbest", "during", "dwell", "eagerly", "easiest", "eclipse", "ecstasy", "edition", "educate", "eighteen", "eighties", "electron", "elegant", "element", "embargo", "embrace", "emerge", "emotions", "empathy", "emperor", "enable", "enclose", "encourage", "endanger", "energy", "enhance", "enquire", "entrance", "envelope", "envision", "epidemic", "escape", "essential", "esteem", "ethical", "evasion", "evident", "exalted", "exceed", "exclaim", "exclude", "execute", "exhaled", "exist", "expect", "expire", "explain", "explore", "extract", "eyebrow", "facial", "factor", "failing", "fallen", "familiar", "fantasy", "fashion", "faucet", "favorite", "feather", "feature", "feline", "females", "fencing", "fertile", "fierce", "figure", "filming", "finally", "finance", "fitness", "flashed", "flatten", "flicker", "floated", "flowing", "fluidly", "fluke", "focusing", "follower", "forbid", "force", "forest", "formal", "formula", "fossil", "fouling", "frantic", "frequent", "freshly", "frown", "furnace", "fuse", "futile", "gainer", "gallons", "gamble", "garden", "gathered", "gemstone", "generate", "genuine", "geology", "geometry", "germ", "gibberish", "giggle", "glimpse", "gnashing", "goddess", "goggle", "gopher", "grander", "granting", "greeting", "grilled", "grinning", "groove", "grooving", "guiding", "guitar", "gullible", "guru", "gushing", "habitat", "happens", "harmful", "hastily", "haughty", "healers", "health", "heart",
"heavier", "hectic", "helping", "herself", "hesitate", "hiding", "highway", "hinder", "history", "hitched", "hoarse", "holler", "homeless", "honest", "hopeful", "horror", "hospital", "humbled", "humming", "hunting", "hurried", "husband", "hydrate", "identify", "idle", "ignored", "illness", "illuminate", "imagine", "impact", "impair", "impart", "implant", "imply", "import", "impose", "improve", "incident", "indicate", "indulge", "inject", "injure", "inkling", "innocent", "inquire", "insist", "inspire", "instinct", "insult", "integral", "intense", "interact", "interest", "intern", "intimate", "invalid", "involve", "isolate", "jacket", "jaguar", "jawbone", "jeering", "jelly", "jewelry", "jogging", "journey", "jubilant", "judgment", "junior", "justice", "keeping", "kettle", "keyboard", "kidding", "kidnap", "kilogram", "kinder", "kitten", "knocked", "knocked", "knocking", "knotted", "knowing", "knuckle", "labored", "lacking", "ladder", "lashing", "lasting", "laughter", "layered", "learning", "leather", "legacy", "legend", "leopard", "liberty", "licking", "lifetime", "lighting", "lightly", "limber", "limited", "lining", "liquid", "listen", "lively", "livid", "loafers", "lobbied", "locking", "lodging", "longest", "looking", "looping", "loosing", "losses", "loving", "lucid", "lumber", "lunatic", "luxury", "machine", "magical", "magnet", "maintain", "majority", "malice", "malign", "manage", "maneuver", "manners", "mantra", "marched", "mariner", "marital", "masking", "massive", "master", "match", "matrix", "meaning", "meeting", "member", "merging", "message", "method", "midterm", "migrate", "milkman", "mineral", "mingle", "miracle", "mirror", "misery", "missing", "mobile", "moderate", "modest", "moments", "monster", "morally", "mortal", "motivate", "mourned", "movement", "muffin", "mullet", "multiply", "murder", "muscles", "musical", "mustard", "mutated", "myself", "mystery", "nailing", "napkin", "navigate",
"oaring", "oasises", "oathful", "obelisk", "obelize", "obesely", "objecto", "objuret", "oblance", "oblatex", "obligee", "oblique", "oblongs", "obtuser", "obverse", "occiput", "occlude", "occular", "occyxes", "octagon", "octaval", "octette", "octopod", "octuply", "odalisk", "oddment", "odograph", "odorous", "odyssey", "oecists", "oecumen", "offbeat", "offence", "offside", "ogreish", "oilbird", "oilhole", "oilskin", "oilskin", "oklahoma", "oldwife", "olefine", "oligist", "olivary", "olivine", "olivine", "olivine", "olycook", "omaosis", "ombilici", "omentum", "omental", "omniana", "omnibus", "oncosis", "oneness", "onerier", "oneness", "onetime", "ongoing", "onliness", "onstage", "ontogeny", "oogenic", "oolitic", "oologic", "oophore", "ooziest", "opacity", "openest", "operons", "ophitic", "opiated", "opinata", "opsonin", "optical", "optimum", "opulent", "oralist", "orality", "orarian", "orbiest", "orbitae", "orbless", "orchard", "orchids", "orcinol", "ordinal", "oregano", "organum", "orgasms", "oriente", "orifice", "origamy", "origans", "orleans", "ormolus", "ornater", "ornerie", "orology", "orphans", "orrisin", "osculum", "osmious", "osmotic", "osmouser", "ossicle", "osteoma", "osteoma", "ostiary", "ostiole", "ostmark", "ostosis", "ostrich", "otalgia", "otolith", "otology", "ouakari", "oublish", "oubliet", "ouchees", "oudeeks", "ouldest", "oulongs", "ouphish", "ouraris", "ourself", "outable", "outbake", "outbeam", "outbleat", "outboast", "outbond", "outburn", "outcast", "outcharm", "outcheat", "outdare", "outdoer", "outdoor", "outdraw", "outecho", "outenvy", "outface", "outflee", "outflung", "outform", "outgain", "outgnaw", "outgush", "outhowl", "outingly", "outjest", "outjump", "outlast", "outlawry", "outleap", "outlungs", "outmost", "outpass", "outpour", "outpray", "outrave", "outread", "outring", "outroar", "outroom",

];

function words(options) {

  function word() {
    if (options && options.maxLength > 1) {
      return generateWordWithMaxLength();
    } else {
      return generateRandomWord();
    }
  }

  function generateWordWithMaxLength() {
    var rightSize = false;
    var wordUsed;
    while (!rightSize) {  
      wordUsed = generateRandomWord();
      if(wordUsed.length <= options.maxLength) {
        rightSize = true;
      }

    }
    return wordUsed;
  }

  function generateRandomWord() {
    return wordList[randInt(wordList.length)];
  }

  function randInt(lessThan) {
    return Math.floor(Math.random() * lessThan);
  }

  // No arguments = generate one word
  if (typeof(options) === 'undefined') {
    return word();
  }

  // Just a number = return that many words
  if (typeof(options) === 'number') {
    options = { exactly: options };
  }

  // options supported: exactly, min, max, join
  if (options.exactly) {
    options.min = options.exactly;
    options.max = options.exactly;
  }
  
  // not a number = one word par string
  if (typeof(options.wordsPerString) !== 'number') {
    options.wordsPerString = 1;
  }

  //not a function = returns the raw word
  if (typeof(options.formatter) !== 'function') {
    options.formatter = (word) => word;
  }

  //not a string = separator is a space
  if (typeof(options.separator) !== 'string') {
    options.separator = ' ';
  }

  var total = options.min + randInt(options.max + 1 - options.min);
  var results = [];
  var token = '';
  var relativeIndex = 0;

  for (var i = 0; (i < total * options.wordsPerString); i++) {
    if (relativeIndex === options.wordsPerString - 1) {
      token += options.formatter(word(), relativeIndex);
    }
    else {
      token += options.formatter(word(), relativeIndex) + options.separator;
    }
    relativeIndex++;
    if ((i + 1) % options.wordsPerString === 0) {
      results.push(token);
      token = ''; 
      relativeIndex = 0;
    }
   
  }
  if (typeof options.join === 'string') {
    results = results.join(options.join);
  }

  return results;
}

module.exports = words;
// Export the word list as it is often useful
words.wordList = wordList;