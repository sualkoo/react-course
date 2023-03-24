// Task 1
// Predstavte si ze robite stranku, ktora si taha z backendu data o zvieratach s tymito atributmi (
//     name, weight, height, lifespan, locations, dateOfAppearnce, topSpeed )
// Skuste z tychto atributov pripravit interface a priradit jednotlivym atributom typy (pocitat aj s undefined)
// ako si myslite ze by to mohlo byt otypovane, nizsie vam pisem jeden prikladny response z backendu
// (podla neho urcite ktory atribut moze/nemusi chodit v reponse). Priklad responsu:

export enum LocationsEnum {
  SVK = "Slovakia",
  PLN = "Poland",
  HUN = "Hungary",
  CZE = "Czechia",
  AUT = "Austria",
  UKR = "Ukraine"
}

export enum FoxEnum {
  SOFT = "Soft",
  ROUGH = "Rough"
}

export enum SkinTypeEnum {
  DARK = "dark",
  LIGHT = "light"
}

export interface IAnimalResponse {
  name?: string;
  weight?: number;
  height?: number;
  lifespan?: number;
  locations: LocationsEnum;
  dateOfApperiance?: Date;
  topSpeed?: number;
}

export interface IFox extends IAnimalResponse {
  furSoftness: FoxEnum;
  skinType: SkinTypeEnum;
  ageOfSexualMaturity?: number;
}

// Dalej na stranke sa zaoberate specifickym druhom lisiek, ktore maju okrem zakladnych animal parametrov,
// aj dalsie parametre ako: furSoftness, skinType a ageOfSexualMaturity. Napiste co najjednoduchsie interface
// ktory bude popisavat tieto konkretne druhy lisok

// napiste prikladny response zo servera v const premennej ako by vyzeral backendovy response, keby
// volam taketo animals API s tym ze nespecifikujem urcity druh zvierata (general volam pre vsetky zvierata)
// staci napriklad ked vrati 3 zvierata

// napiste funkciu otypovanu typescriptom, (bud arrow alebo normalne function()), ktora moze(nemusi) brat ako parameter
// nazov zvierata (urcit parameter typ) a explicitine urcit animal interface (ktore ste v prvej ulohe napisali), ktory tato funkcia vracia
// cize povedat funkcii aky typ ma vratit (spominal som to ako sa to znaci ak nie pogooglit je to chvila)
// v tele funkcie nemusi byt zatial nic (mozte tam len napr. console.log(name), ktore prichadza ako parameter, potom si ukazeme ako
// by sa takyto request volal

//napisat funkciu ktora berie ako vstup. parameter zviera s interfacom ktory ste urcili v prvej ulohe,
// vo funkcii destrukturovat atributy weight a height a aby funkcii vracala BMI zvierata (len jednoduche weight/height na druhu)
