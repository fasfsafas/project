// type TPerson = {
//   name: string,
//   age: number,
//   speciality: string
// }
// const person: TPerson = {
//   name: "Джамал",
//   age: 22,
//   speciality: "Ганстер"
// }
// person.age = 46;
// console.log(person.age)
type TCompany = {
  profits: number,
  workers: number,
  workersQuit: number,
  workersNew: number,
}
const company: TCompany = {
  profits: 3200000,
  workers: 416,
  workersQuit: 60,
  workersNew: 45
}
//console.log(company)
company.workers = 400;
company.workersQuit = 44;
company.workersNew = 64;
//console.log(company)
type TDaysInVacation = 7 | 14;
type TVacationPackage = "in_city" | "country" | "travel"
type TVacationOrder = {
  nameEmp: string;
  date: string;
  isFamily: boolean;
  daysInVacation: TDaysInVacation;
  package: TVacationPackage;
}
const vacationOrder: TVacationOrder = {
  nameEmp: "Гугу гага",
  date: "14 марта",
  isFamily: false,
  daysInVacation: 7,
  package: "travel"
}
enum VacationPackage {
  in_city = "в городе",
  country = "по стране",
  travel = "заграницу",
}
const getFamilyText = (isFamily: boolean) => {
  if(isFamily) {
    return "с семьей";
  }
  return "в одиночку"
};
//console.log(`Сотрудник ${vacationOrder.nameEmp} ${getFamilyText(vacationOrder.isFamily)} берет отпуск ${vacationOrder.date} на ${vacationOrder.daysInVacation} дней ${VacationPackage[vacationOrder.package]}`)
const months: string[] = ["Декабрь", "Январь", "Февраль", "Март", "Апрель", "Май"]
for (let i = 0; i < 6; i++) {
  //console.log(months[i])
}
const human = {
  name: "Джамал",
  age: 46
}
const person = {
  ...human,
  speciality: "Гангстер"
}
type product = {
  title: string;
  category: string;
  price: number;
}
const p1: product = {
  title: "BOSH-30",
  category: "Холодильник",
  price: 150000,
}
const m: product[] = [p1,p1,p1]

console.log("Первая задача")
type AttackType = "Physical" | "Magical"
function calculateDamage(baseDamage: number, targetArmor: number, attackType: AttackType):number{
  if(attackType === "Magical") {
    return baseDamage;
  }
  else {
    if(baseDamage - targetArmor < 0){
      return 0;
    }
    else {
      return baseDamage - targetArmor;
    }
  }
}
console.log(calculateDamage(10, 5, "Magical"))
console.log(calculateDamage(20, 11, "Physical"))
console.log(calculateDamage(-5, 0, "Physical"))

console.log("Вторая задача")
enum OrderStatus{
  Processing,
  Shipped,
  Delivered,
  Cancelled
}
function getClientNotification(status: OrderStatus):string{
  switch(status){
    case OrderStatus.Processing:
      return "Ваш заказ собирается"
      break;
    case OrderStatus.Shipped:
      return "Заказ передан на доставку"
      break;
    case OrderStatus.Delivered:
      return "Заказ успешно доставлен"
      break;
    case OrderStatus.Cancelled:
      return "Заказ отменен"
      break;
    default:
      return "Статус неизвестен. Обратитесь в поддержку"
  }
}
console.log(getClientNotification(OrderStatus.Shipped))

console.log("Третья задача")
type TTransaction = {
  id: number,
  amount: number,
  country: string
}

const t1: TTransaction = {
  id: 1,
  amount: 40000,
  country: "France"
}
const t2: TTransaction = {
  id: 2,
  amount: 25000,
  country: "Germany"
}
const t3: TTransaction = {
  id: 3,
  amount: 150000,
  country: "Russia"
}
const t4: TTransaction = {
  id: 4,
  amount: 10000,
  country: "Kazakhstan"
}
const t5: TTransaction = {
  id: 5,
  amount: 2,
  country: "Unknown"
}


