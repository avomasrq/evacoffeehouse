import { useState } from 'react';
import { Coffee, Droplet, IceCream, CupSoda, UtensilsCrossed, Sparkles, Plus, Check, GlassWater, Soup, Salad, Cookie, Baby } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';

interface MenuItem {
  id: string;
  name: string;
  nameRu: string;
  nameKz: string;
  price: number;
  description?: string;
  descriptionRu?: string;
  descriptionKz?: string;
}

interface MenuCategory {
  id: string;
  title: string;
  titleRu: string;
  titleKz: string;
  icon: React.ReactNode;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: 'breakfasts',
    title: 'Breakfasts',
    titleRu: 'Завтраки',
    titleKz: 'Таңғы ас',
    icon: <UtensilsCrossed size={24} />,
    items: [
      { id: 'bf-1', name: 'Village Breakfast', nameRu: 'Деревенский завтрак', nameKz: 'Ауылдық таңғы ас', price: 3600, description: 'Fried eggs from 2 eggs, with beef sausages, mushrooms, marinated mixed salad, potato wedges, and crispy bread', descriptionRu: 'Глазунья из 2-х яиц, с говяжьими колбасками, шампиньонами, маринованным миксом салата, картофельными дольками и с хрустящим хлебом', descriptionKz: '2 жұмыртқадан дайындалған күйілген жұмыртқа, сиыр шұжықтары, саңырауқұлақтар, маринадталған аралас салат, картоп долькалары және қытырлақ нан' },
      { id: 'bf-2', name: 'Scrambled Breakfast with Salmon / Turkey', nameRu: 'Скрамбл завтрак с лососем / индейка', nameKz: 'Лосось / индюшкамен скрамбл таңғы ас', price: 3900, description: 'Scrambled eggs from 2 eggs with smoked salmon and avocado. Served with green mixed salad, cream cheese, and crispy bread', descriptionRu: 'Скрамбл из 2-х яиц с копчёным лососем и авокадо. С дополнением зелёного микс салата, творожного сыра и с хрустящим хлебом', descriptionKz: '2 жұмыртқадан дайындалған скрамбл, түтілген лосось және авокадо. Жасыл аралас салат, ірімшік сыры және қытырлақ нанмен қосымша' },
      { id: 'bf-3', name: 'Japanese Omurice', nameRu: 'Японский Омурайсу', nameKz: 'Жапон Омурайсу', price: 3200, description: 'Traditional Japanese dish. Omelette with basmati rice, chicken fillet, and ketchup filling. Served as a roll with green mixed salad and two pieces of crispy bread', descriptionRu: 'Традиционное японское блюдо. Омлет с начинкой из риса басмати, куриного филе и кетчупа. Подаётся в виде ролла с дополнением зелёного микс салата и с двумя хрустящим хлебом', descriptionKz: 'Дәстүрлі жапон тағамы. Басмати күріші, тауық филесі және кетчуппен толтырылған омлет. Жасыл аралас салат және екі қытырлақ нанмен ролл түрінде ұсынылады' },
      { id: 'bf-4', name: 'Almaty Breakfast', nameRu: 'Алматы завтрак', nameKz: 'Алматы таңғы ас', price: 3200, description: 'Fried eggs from 2 eggs, with beef sausages, with Halloumi cheese, fresh vegetables, and crispy bread', descriptionRu: 'Глазунья из 2-х яиц, с говяжьими сосисками, с добавлением сыра халуми, свежими овощами и с хрустящим хлебом', descriptionKz: '2 жұмыртқадан дайындалған күйілген жұмыртқа, сиыр шұжықтары, халуми сыры, жаңа көкөністер және қытырлақ нан' },
      { id: 'bf-5', name: 'American Steak Breakfast', nameRu: 'Американский стейк завтрак', nameKz: 'Америкалық стейк таңғы ас', price: 4800, description: 'Fried eggs from 2 eggs with grilled Ribeye steak and green mixed salad (doneness of your choice)', descriptionRu: 'Глазунья из 2-х яиц со стейком Рибай на гриле с зелёным миксом салата (степень прожарки на ваш выбор)', descriptionKz: '2 жұмыртқадан дайындалған күйілген жұмыртқа, грильде пісірілген Рибай стейк және жасыл аралас салат (пісу дәрежесін өзіңіз таңдайсыз)' },
      { id: 'bf-6', name: 'Happy Milka', nameRu: 'Happy Milka', nameKz: 'Happy Milka', price: 3800, description: 'Omelette from 2 eggs with mozzarella on whole grain bread with fried sausage, hashbrown, beef bacon, beans in tomato sauce and salad', descriptionRu: 'Омлет из 2-х яиц с моцареллой на цельнозерновом хлебе с жареной колбаской, хашбрауном, говяжьим беконом, фасолью в томатном соусе и салатом', descriptionKz: '2 жұмыртқадан дайындалған омлет, моцарелла сыры, толық дән наны, қуырылған шұжық, хашбраун, сиыр беконы, томаттық соустағы бұршақ және салат' },
      { id: 'bf-7', name: 'English Breakfast with Hashbrown', nameRu: 'Английский завтрак с хашбрауном', nameKz: 'Хашбраунмен ағылшын таңғы ас', price: 3600, description: 'Fried eggs from 2 eggs, with beef bacon, mushrooms, chicken sausages, potato hashbrown, and crispy bread', descriptionRu: 'Глазунья из 2-х яиц, с беконом из говядины, с шампиньонами, с куринными сосисками, картофельным хашбрауном и с хрустящим хлебом', descriptionKz: '2 жұмыртқадан дайындалған күйілген жұмыртқа, сиыр беконы, саңырауқұлақтар, тауық шұжықтары, картоп хашбрауны және қытырлақ нан' },
      { id: 'bf-8', name: 'Arabic Breakfast', nameRu: 'Арабский завтрак', nameKz: 'Араб таңғы ас', price: 3800, description: 'Tender cream cheese Labneh on aromatic pita, topped with poached egg with perfectly runny yolk. Served with honey-chili sauce, cilantro and a light note of vinegar, creating a balance of sweetness, spiciness and freshness', descriptionRu: 'Нежный сливочный сыр Лабне на ароматной пите, дополненный яйцом пашот с идеально текучим желтком. Подаётся с медово-чили соусом, кинзой и лёгкой ноткой уксуса, создавая баланс сладости, остроты и свежести', descriptionKz: 'Хош иісті питадағы жұмсақ кілегей сыры Лабне, мінсіз ағатын сарыуызбен пашот жұмыртқамен толықтырылған. Бал-чили соусы, кинза және жеңіл сірке қоспасымен ұсынылады, тәттілік, ащылық және жандылықтың теңдестігін құрайды' },
      { id: 'bf-9', name: 'Good Morning', nameRu: 'Good Morning', nameKz: 'Good Morning', price: 2400, description: 'Fried potatoes with fried eggs from 3 eggs and toasted bread', descriptionRu: 'Жареный картофель с добавлением глазуньи из 3-х яиц и поджаренным хлебом', descriptionKz: '3 жұмыртқадан дайындалған күйілген жұмыртқамен қуырылған картоп және қуырылған нан' },
      { id: 'bf-10', name: 'Croissant Sandwich with Turkey / Salmon / Tuna', nameRu: 'Круассан сэндвич с индейкой / лососем / тунцом', nameKz: 'Индейка / лосось / тұнбақбалықпен круассан сэндвич', price: 3200, description: 'Classic croissant with smoked turkey / salmon / tuna, fresh vegetables, iceberg lettuce, Caesar sauce, fried egg, and green mixed salad', descriptionRu: 'Классический круассан с добавлением копчёной индейки / лосося/ тунца свежими овощами, салатом айсберг, соусом Цезарь, яйцом в виде глазунья и зелёного микс салата', descriptionKz: 'Классикалық круассан, түтілген индейка / лосось / тұнбақбалық, жаңа көкөністер, айсберг салаты, Цезарь соусы, күйілген жұмыртқа және жасыл аралас салатпен' },
      { id: 'bf-11', name: 'Fitness Breakfast', nameRu: 'Фитнес завтрак', nameKz: 'Фитнес таңғы ас', price: 3200, description: 'Buckwheat porridge with boiled egg, with homemade turkey sausages, mushrooms, Feta cheese with fresh cucumbers', descriptionRu: 'Гречневая крупа с варенным яйцом, с домашними колбасками из индейки, грибами, сыр фетакса со свежими огурцами', descriptionKz: 'Қайнатылған жұмыртқамен тары ботқасы, үйде дайындалған индейка шұжықтары, саңырауқұлақтар, жаңа қиярмен фета сыры' },
      { id: 'bf-12', name: 'Grilled Hawaiian Sandwich with Turkey and Mozzarella', nameRu: 'Гриль-гавайский сэндвич с индейкой и сыром моцарелла', nameKz: 'Индейка және моцарелла сырымен гриль-гавай сэндвич', price: 2600, description: 'Toasted bread with turkey, tomatoes, and Mozzarella cheese, with green mixed salad', descriptionRu: 'Поджаренный хлеб тост с индейкой, помидорами и с сыром моцареллой, с добавлением зеленого микса салата', descriptionKz: 'Индейка, қызанақ және моцарелла сырымен қуырылған нан тосты, жасыл аралас салатпен' },
      { id: 'bf-13', name: 'Avocado Toast', nameRu: 'Авокадо тост', nameKz: 'Авокадо тост', price: 2800, description: 'Toasted crispy bread, with avocado puree and cream cheese and 2 eggs', descriptionRu: 'Поджаренный хрустящий хлеб, с добавлением пюре авокадо и творожного сыра и 2-ух яиц', descriptionKz: 'Қуырылған қытырлақ нан, авокадо пюресі, ірімшік сыры және 2 жұмыртқамен' },
      { id: 'bf-14', name: 'Burritos', nameRu: 'Бурритос', nameKz: 'Бурритос', price: 3400, description: 'Wheat tortilla with chicken fillet, fried mushrooms, red beans, Suluguni cheese, green mixed salad, and scrambled egg', descriptionRu: 'Пшеничная лепёшка тортилья с добавлением куриного филе, жаренных грибов, красной фасоли, сыра сулугуни, зелёным миксом салата и яйцом в виде скрамбл', descriptionKz: 'Тауық филесі, қуырылған саңырауқұлақтар, қызыл бұршақ, сулугуни сыры, жасыл аралас салат және скрамбл жұмыртқамен бидай тортильясы' },
      { id: 'bf-15', name: 'Omelette Sandwich', nameRu: 'Омлет сэндвич', nameKz: 'Омлет сэндвич', price: 2700, description: 'Sandwich based on toasted bread, fried in a tender omelette with cheese and ham', descriptionRu: 'Сэндвич на основе гостерного хлеба, обжаренных в нежном омлете с добавлением сыра и ветчины', descriptionKz: 'Қуырылған нан негізіндегі сэндвич, ірімшік және ветчинамен жұмсақ омлетте қуырылған' },
      { id: 'bf-16', name: 'Bagel with Salmon / Turkey', nameRu: 'Бейгл с лососем/ индейкой', nameKz: 'Лосось / индейкамен бейгл', price: 3400, description: 'Signature Bagel bun with delicate sauce, arugula, avocado, lettuce, cream cheese, salmon / turkey', descriptionRu: 'Авторская Булочка бейгл с нежным соусом, рукколо, авакадо, листья салата, сыр кремета, лосось/ индейка', descriptionKz: 'Жұмсақ соус, руккола, авокадо, салат жапырақтары, крем сыры, лосось / индейкамен авторлық бейгл бұқасы' },
      { id: 'bf-17', name: 'Eggs Benedict with Beef Ham / Salmon', nameRu: 'Яйца Бенедикт с говяжьей ветчиной /лосось', nameKz: 'Сиыр ветчинасы / лососьпен Бенедикт жұмыртқасы', price: 3600, description: 'Aromatic bun with cream cheese, beef ham / salmon, two poached eggs, and topped with Hollandaise sauce', descriptionRu: 'Ароматная булочка с творожным сыром, говяжья ветчина/лосось, два яйца пашот, и сверху поливается голландским соусом', descriptionKz: 'Ірімшік сыры, сиыр ветчинасы / лосось, екі пашот жұмыртқасымен хош иісті бұқа, үстіне голланд соусы құйылады' },
      { id: 'bf-18', name: 'Shakshuka with Mozzarella', nameRu: 'Шакшука с моцареллой', nameKz: 'Моцарелламен шакшука', price: 3400, description: 'Dish of 3 eggs in tomato sauce, with Mozzarella, hot pepper, onion, spices, and crispy bread', descriptionRu: 'Блюдо из 3-ёх яиц в соусе из помидоров, с добавлением моцареллы, острого перца, лука, приправ и хрустящего хлеба и с', descriptionKz: '3 жұмыртқадан дайындалған тағам, қызанақ соусында, моцарелла, ащы бұрыш, пияз, дәмдеуіштер және қытырлақ нанмен' },
      { id: 'bf-19', name: 'The Most Delicious Potato Pancakes', nameRu: 'Самые вкусные картофельные дранники', nameKz: 'Ең дәмді картоп драники', price: 2800, description: 'Fried potato pancakes, mixed salad with cherry tomatoes, with smoked salmon, boiled egg, and Tartar sauce', descriptionRu: 'Поджаренные картофельные драники, микс салата с помидорами черри, с добавлением копченного лосося, варенное яйцо и соус тар-тар', descriptionKz: 'Қуырылған картоп драники, шие қызанақтарымен аралас салат, түтілген лосось, қайнатылған жұмыртқа және тартар соусымен' },
      { id: 'bf-20', name: 'Chicken Quesadilla', nameRu: 'Кесаделья с курицей', nameKz: 'Тауықпен кесаделья', price: 2900, description: 'Fried chicken with onion, scrambled egg, Cheddar cheese, bell pepper, cucumbers, and corn', descriptionRu: 'Обжаренная курица с луком, скрамбл,сыр чеддер, перцем светофор, огурцы и кукурузой', descriptionKz: 'Пиязбен қуырылған тауық, скрамбл, чеддер сыры, қызыл бұрыш, қиярлар және жүгерімен' },
      { id: 'bf-21', name: 'Milka Morning Roll', nameRu: 'Milka Morning Roll', nameKz: 'Milka Morning Roll', price: 2400, description: 'Toasted lavash with egg and cheese, and fresh cucumber salad, lettuce dressed with Philadelphia sauce', descriptionRu: 'Поджаристый лаваш с добавлением яйца и сыра, и салат из свежего огурца, листья салата заправленный соусом филадельфия', descriptionKz: 'Жұмыртқа және ірімшікпен қуырылған лаваш, жаңа қияр салаты, филадельфия соусымен таңдалған салат жапырақтары' },
    ],
  },
  {
    id: 'porridges',
    title: 'Porridges',
    titleRu: 'Каши',
    titleKz: 'Ботқалар',
    icon: <UtensilsCrossed size={24} />,
    items: [
      { id: 'por-1', name: 'Semolina Porridge', nameRu: 'Манная каша', nameKz: 'Манная ботқасы', price: 2000, description: 'Tender milk semolina porridge with butter and berries', descriptionRu: 'Нежная молочная манная каша со сливочным маслом с добавлением ягод', descriptionKz: 'Сарғайтқыш маймен жұмсақ сүтті манная ботқасы, жидектермен' },
      { id: 'por-2', name: 'Buckwheat Porridge', nameRu: 'Каша гречневая', nameKz: 'Тары ботқасы', price: 2000, description: 'Buckwheat porridge with milk and fresh strawberries', descriptionRu: 'Каша гречневая на молоке со свежей клубникой', descriptionKz: 'Сүттегі тары ботқасы, жаңа құлпынаймен' },
      { id: 'por-3', name: '5 Grain Porridge', nameRu: 'Каша 5 злаков', nameKz: '5 дән ботқасы', price: 2000, description: 'Porridge from 5 grains with milk including: oatmeal, corn, rye, wheat, millet with banana and walnuts', descriptionRu: 'Каша из 5-ти злаков на молоке в которые входят: овсяная, кукурузная, ржаная, пшеничная, пшенная крупа с добавлением банана и грецких орехов', descriptionKz: 'Сүттегі 5 дәннен дайындалған ботқа, оған кіреді: жүгері, қарабидай, бидай, тары дәні, банан және жаңғақпен' },
      { id: 'por-4', name: 'Rice Porridge with Fruits', nameRu: 'Каша рисовая с фруктами', nameKz: 'Жеміспен күріш ботқасы', price: 2000, description: 'Rice porridge with milk with canned peach and strawberries', descriptionRu: 'Каша рисовая на молоке с консервированным персиком и клубникой', descriptionKz: 'Сүттегі күріш ботқасы, консервіленген шабдалы және құлпынаймен' },
    ],
  },
  {
    id: 'bowls',
    title: 'Bowls',
    titleRu: 'Боулы',
    titleKz: 'Боулы',
    icon: <UtensilsCrossed size={24} />,
    items: [
      { id: 'bowl-1', name: 'Poke Bowl with Salmon', nameRu: 'Поке-боул с лососем', nameKz: 'Лососьпен поке-боул', price: 3600, description: 'Smoked salmon, fresh cucumber, corn, basmati rice, Lays chips and avocado. Dressed with Teriyaki sauce', descriptionRu: 'Копчёный лосось, свежий огурец, кукуруза, рис басмати,чипсы Lays и авокадо. Заправляется соусом Терияки', descriptionKz: 'Түтілген лосось, жаңа қияр, жүгері, басмати күріші, Lays чипсы және авокадо. Терияки соусымен таңдалады' },
      { id: 'bowl-2', name: 'Poke Bowl with Chicken', nameRu: 'Поке-боул с курицей', nameKz: 'Тауықпен поке-боул', price: 3400, description: 'Fried chicken fillet, fresh cucumber, corn, basmati rice. Lays chips and avocado. Dressed with Teriyaki sauce', descriptionRu: 'Жареное куриное филе, свежий огурец, кукуруза, рис басмати. Чипсы Lays и авокадо. Заправляется соусом Терияки', descriptionKz: 'Қуырылған тауық филесі, жаңа қияр, жүгері, басмати күріші. Lays чипсы және авокадо. Терияки соусымен таңдалады' },
      { id: 'bowl-3', name: 'Milka Bowl', nameRu: 'Milka bowl', nameKz: 'Milka боулы', price: 4000, description: 'Tender salmon fillet with avocado slices, scrambled egg and rice', descriptionRu: 'Нежное филе лосося с дольками авокадо, яйцом скрамбл и росом', descriptionKz: 'Авокадо долькалары, скрамбл жұмыртқа және күрішпен жұмсақ лосось филесі' },
      { id: 'bowl-4', name: 'Teriyaki Chicken', nameRu: 'Курица Терияки', nameKz: 'Терияки тауығы', price: 3100, description: 'Crispy chicken fillet with Teriyaki sauce', descriptionRu: 'Хрустящее куриное филе под соусом Терияки', descriptionKz: 'Терияки соусымен қытырлақ тауық филесі' },
      { id: 'bowl-5', name: 'Classic Brazilian Acai Bowl', nameRu: 'Classic Brazillian Acai Bowl', nameKz: 'Классикалық бразилиялық асаи боулы', price: 3900, description: 'Acai with granola and fresh berries', descriptionRu: 'Асай с гранолой и сежими ягодами', descriptionKz: 'Гранола және жаңа жидектермен асаи' },
    ],
  },
  {
    id: 'soups',
    title: 'Soups',
    titleRu: 'Супы',
    titleKz: 'Сорпалар',
    icon: <Soup size={24} />,
    items: [
      { id: 'soup-1', name: 'Lentil Soup', nameRu: 'Суп чечевичный', nameKz: 'Жасмық сорпасы', price: 2800, description: 'Cream soup with cream. Served separately with croutons and a slice of lemon', descriptionRu: 'Крем суп, с добавлением сливок. Отдельно подаются гренки и долька лимона', descriptionKz: 'Кілегеймен крем сорпа. Бөлек гренки және лимон долькасы ұсынылады' },
      { id: 'soup-2', name: 'Noodles with Chicken Fillet', nameRu: 'Лапша с куриным филе', nameKz: 'Тауық филесімен кеспе', price: 2800, description: 'Chicken fillet in rich broth with homemade noodles', descriptionRu: 'Куриное филе в насыщенном бульоне и с лапшой по-домашнему', descriptionKz: 'Үйде дайындалған кеспемен бай сорпадағы тауық филесі' },
      { id: 'soup-3', name: 'Cheese Soup with Mushrooms', nameRu: 'Сырный суп с грибами', nameKz: 'Саңырауқұлақпен ірімшік сорпасы', price: 2900, description: 'Fried mushrooms in rich cheese broth with potatoes', descriptionRu: 'Обжаренные грибы в насыщенном сырном бульоне с картофелем', descriptionKz: 'Картоппен бай ірімшік сорпасындағы қуырылған саңырауқұлақтар' },
    ],
  },
  {
    id: 'salads',
    title: 'Salads',
    titleRu: 'Салаты',
    titleKz: 'Салаттар',
    icon: <Salad size={24} />,
    items: [
      { id: 'sal-1', name: 'Greek Salad', nameRu: 'Салат Греческий', nameKz: 'Грек салаты', price: 3200, description: 'Greek salad with Feta cheese. Dressed with lemon-olive sauce', descriptionRu: 'Греческий салат с сыром фетакса. Заправлен лимонно оливковым соусом', descriptionKz: 'Фета сырымен грек салаты. Лимон-зейтін соусымен таңдалған' },
      { id: 'sal-2', name: 'Roast Beef Salad', nameRu: 'Салат с Ростбифом', nameKz: 'Ростбифпен салат', price: 3300, description: 'Roast beef from beef with potato wedges, cherry tomatoes and green mixed salad. Dressed with mayonnaise-mustard sauce', descriptionRu: 'Ростбиф из говядины с добавлением картофельных долек, помидоров черри и зелёного микс салата. Заправляется майонезно-горчичным соусом', descriptionKz: 'Сиыр етінен ростбиф, картоп долькалары, шие қызанақтары және жасыл аралас салатпен. Майонез-горчица соусымен таңдалады' },
      { id: 'sal-3', name: 'Caesar Salad', nameRu: 'Салат Цезарь', nameKz: 'Цезарь салаты', price: 3200, description: 'Caesar salad with chicken fillet, Caesar sauce, quail egg and croutons', descriptionRu: 'Цезарь салат с куриным филе, соусом Цезарь, перепелиным яйцом и гренками', descriptionKz: 'Тауық филесі, Цезарь соусы, бөдене жұмыртқасы және гренкимен Цезарь салаты' },
    ],
  },
  {
    id: 'pasta',
    title: 'Pasta',
    titleRu: 'Пасты',
    titleKz: 'Пасталар',
    icon: <UtensilsCrossed size={24} />,
    items: [
      { id: 'pas-1', name: 'Pasta Bolognese', nameRu: 'Паста Болоньезе', nameKz: 'Болоньезе пастасы', price: 3500, description: 'Traditional Italian pasta in tomato sauce, with beef, and Parmesan cheese', descriptionRu: 'Традиционная итальянская паста в томатном соусе, с говядиной, и сыром пармезан', descriptionKz: 'Дәстүрлі италиялық паста, томаттық соуста, сиыр еті және пармезан сырымен' },
      { id: 'pas-2', name: 'Pasta Alfredo', nameRu: 'Паста Альфредо', nameKz: 'Альфредо пастасы', price: 3500, description: 'Classic Italian pasta, with chicken fillet, mushrooms, Pesto sauce and cream', descriptionRu: 'Классическая итальянская паста, с добавлением куриного филе, шампиньонов, соуса Песто и сливок', descriptionKz: 'Классикалық италиялық паста, тауық филесі, саңырауқұлақтар, Песто соусы және кілегеймен' },
      { id: 'pas-3', name: 'Pasta Carbonara', nameRu: 'Паста карбонара', nameKz: 'Карбонара пастасы', price: 3700, description: 'Italian pasta, with beef ham, boiled spaghetti, mixed with egg sauce, Parmesan cheese and cream', descriptionRu: 'Итальянская паста, с добавлением говяжьей ветчины,отваренные спагетти, смешанные соусом из яиц, сыр пармезам и сливок', descriptionKz: 'Италиялық паста, сиыр ветчинасы, қайнатылған спагетти, жұмыртқа соусы, пармезан сыры және кілегеймен араластырылған' },
      { id: 'pas-4', name: 'Pasta Arrabbiata', nameRu: 'Паста Арабиата', nameKz: 'Арабиата пастасы', price: 3900, description: 'Penne in spicy tomato sauce with garlic, chili pepper and aromatic olive oil. Light spiciness and rich taste in the best traditions of Italian cuisine', descriptionRu: 'Пенне в пикаантном томатногм соусе с чесноком, перцем чили и ароматным оливковым маслом. Легкая острота и насыщенный вкус в лучших традициях итальянском кухни', descriptionKz: 'Сарымсақ, чили бұрышы және хош иісті зейтін майымен ащы томаттық соустағы пенне. Италиялық асхананың ең жақсы дәстүрлеріндегі жеңіл ащылық және бай дәм' },
    ],
  },
  {
    id: 'desserts',
    title: 'Desserts',
    titleRu: 'Сладкое меню',
    titleKz: 'Тәттілер',
    icon: <Cookie size={24} />,
    items: [
      { id: 'des-1', name: 'Signature Cheesecakes', nameRu: 'Авторские сырники', nameKz: 'Авторлық ірімшіктілер', price: 3200, description: 'Cheesecakes with cream and cream cheese sauce and blueberries', descriptionRu: 'Сырники с соусом из сливок и творожного сыра и голубикой', descriptionKz: 'Кілегей және ірімшік сыры соусымен ірімшіктілер, қаражидекпен' },
      { id: 'des-2', name: 'Signature Caramel Cheesecakes', nameRu: 'Авторские карамельные сырники', nameKz: 'Авторлық карамельді ірімшіктілер', price: 2900, description: 'Tender cheesecakes with signature caramel sauce and sour cream', descriptionRu: 'Нежные сырники с дополнением авторского соуса карамели и сметаны', descriptionKz: 'Авторлық карамель соусы және қаймақпен жұмсақ ірімшіктілер' },
      { id: 'des-3', name: 'Pancakes with Nutella', nameRu: 'Панкейки с нутеллой', nameKz: 'Нутелламен панкейктер', price: 2900, description: 'Pancakes with Nutella, berries and banana', descriptionRu: 'Панкейки с добавлением нутеллы, ягодами и бананом', descriptionKz: 'Нутелла, жидектер және бананмен панкейктер' },
      { id: 'des-4', name: 'Belgian Waffles with Nutella', nameRu: 'Бельгийские вафли с нутеллой', nameKz: 'Нутелламен бельгиялық вафли', price: 2700, description: 'Belgian waffles with Nutella paste and berries', descriptionRu: 'Бельгийские вафли с добавлением пасты нутеллы и ягод', descriptionKz: 'Нутелла пастасы және жидектермен бельгиялық вафли' },
      { id: 'des-5', name: 'Belgian Waffles with Caramel', nameRu: 'Бельгийские вафли с карамелью', nameKz: 'Карамельмен бельгиялық вафли', price: 3200, description: 'Pieces of Belgian waffles with signature sauce, caramel and berries', descriptionRu: 'Кусочки бельгийских вафлей с добавлением авторского соуса, карамели и ягод', descriptionKz: 'Авторлық соус, карамель және жидектермен бельгиялық вафли кесектері' },
      { id: 'des-6', name: 'Pancakes with Nutella', nameRu: 'Блинчики с нутеллой', nameKz: 'Нутелламен құймақтар', price: 2400, description: 'Tender pancakes with Nutella paste', descriptionRu: 'Нежные блины с пастой нутелла', descriptionKz: 'Нутелла пастасымен жұмсақ құймақтар' },
    ],
  },
  {
    id: 'kids-menu',
    title: 'Kids Menu',
    titleRu: 'Детское меню',
    titleKz: 'Балалар мәзірі',
    icon: <Baby size={24} />,
    items: [
      { id: 'kid-1', name: 'Squid Game', nameRu: 'Игра в кальмара', nameKz: 'Кальмар ойыны', price: 2500, description: 'Macaroni with cream and beef sausages', descriptionRu: 'Макароны со сливками и говяжьими сосисками', descriptionKz: 'Кілегей және сиыр шұжықтарымен макарон' },
      { id: 'kid-2', name: 'Champion Breakfast', nameRu: 'Завтрак Чемпиона', nameKz: 'Чемпион таңғы асы', price: 2900, description: 'Fried scrambled with cheese, hashbrown, beef sausages, bread and mixed salad', descriptionRu: 'Жаренный скрамбл с сыром, хашбраун, говяжьими сосисками, хлеб и с добавлением микс салата', descriptionKz: 'Ірімшікпен қуырылған скрамбл, хашбраун, сиыр шұжықтары, нан және аралас салатпен' },
      { id: 'kid-3', name: 'Cheese Sticks', nameRu: 'Сырные палочки', nameKz: 'Ірімшік таяқшалары', price: 2500, description: 'Mozzarella cheese in breading', descriptionRu: 'Сыр моцарелла в панировке', descriptionKz: 'Панировкадағы моцарелла сыры' },
      { id: 'kid-4', name: 'Kids Dumplings', nameRu: 'Детские пельмени', nameKz: 'Балалар тұшпарасы', price: 2600, description: 'Homemade chicken dumplings with broth', descriptionRu: 'Домашние куриные пельмени с добавлением бульона', descriptionKz: 'Сорпамен үйде дайындалған тауық тұшпарасы' },
      { id: 'kid-5', name: 'Chicken Nuggets', nameRu: 'Куриные наггетсы', nameKz: 'Тауық наггетстары', price: 2500, description: 'Chicken nuggets served with cheese sauce', descriptionRu: 'Куриные наггетсы подаются с сырным соусом', descriptionKz: 'Ірімшік соусымен тауық наггетстары ұсынылады' },
      { id: 'kid-6', name: 'Crab Burger', nameRu: 'Крабс Бургер', nameKz: 'Крабс бургер', price: 3200, description: 'Burger with beef patty, vegetables, ketchup and french fries', descriptionRu: 'Бургер с говяжьей котлетой, овощами, кетчупом и картофелем фри', descriptionKz: 'Сиыр котлетасы, көкөністер, кетчуп және картоп фримен бургер' },
      { id: 'kid-7', name: 'French Fries with Cheese', nameRu: 'Картофель фри с сыром', nameKz: 'Ірімшікпен картоп фри', price: 1700, description: 'French fries with cheese', descriptionRu: 'Картофель фри с сыром', descriptionKz: 'Ірімшікпен картоп фри' },
    ],
  },
  {
    id: 'coffee-espresso',
    title: 'Coffee Drinks Based on Espresso',
    titleRu: 'Кофейные напитки на основе эспрессо',
    titleKz: 'Эспрессо негізіндегі кофе сусындары',
    icon: <Coffee size={24} />,
    items: [
      { id: 'ce-1', name: 'Espresso', nameRu: 'Эспрессо', nameKz: 'Эспрессо', price: 900 },
      { id: 'ce-2', name: 'Americano', nameRu: 'Американо', nameKz: 'Американо', price: 1000 },
      { id: 'ce-3', name: 'Espresso DOPPIO', nameRu: 'Эспрессо ДОППИО', nameKz: 'Эспрессо ДОППИО', price: 1000 },
    ],
  },
  {
    id: 'coffee-milk',
    title: 'Coffee with Milk and Cream',
    titleRu: 'Кофейные с молоком и сливками',
    titleKz: 'Сүт пен кілегеймен кофе',
    icon: <Droplet size={24} />,
    items: [
      { id: 'cm-1', name: 'Cappuccino', nameRu: 'Капучино', nameKz: 'Капучино', price: 1400 },
      { id: 'cm-2', name: 'Latte', nameRu: 'Латте', nameKz: 'Латте', price: 1300 },
      { id: 'cm-3', name: 'Latte with Cheese Foam', nameRu: 'Латте с сырной пенкой', nameKz: 'Ірімшік көбігімен латте', price: 1800 },
      { id: 'cm-4', name: 'Flat White', nameRu: 'Флэт-Уайт', nameKz: 'Флэт-Уайт', price: 1200 },
      { id: 'cm-5', name: 'Raf', nameRu: 'Раф', nameKz: 'Раф', price: 1500 },
      { id: 'cm-6', name: 'Lavender Latte', nameRu: 'Латте Лавандовый', nameKz: 'Лавандалы латте', price: 1400 },
      { id: 'cm-7', name: 'Mocha', nameRu: 'Мокко', nameKz: 'Мокко', price: 1600 },
      { id: 'cm-8', name: 'Coffee with Halva', nameRu: 'Кофе с Халвой', nameKz: 'Халвамен кофе', price: 1700 },
    ],
  },
  {
    id: 'cold-coffee',
    title: 'Cold Coffee Drinks',
    titleRu: 'Кофейные холодные напитки',
    titleKz: 'Суық кофе сусындары',
    icon: <IceCream size={24} />,
    items: [
      { id: 'cc-1', name: 'Espresso Tonic', nameRu: 'Эспрессо Тоник', nameKz: 'Эспрессо Тоник', price: 1600 },
      { id: 'cc-2', name: 'Bumble', nameRu: 'Бамбл', nameKz: 'Бамбл', price: 1900 },
      { id: 'cc-3', name: 'Iced Latte', nameRu: 'Айс-Латте', nameKz: 'Айс-Латте', price: 1500 },
      { id: 'cc-4', name: 'Iced Cappuccino', nameRu: 'Айс-Капучино', nameKz: 'Айс-Капучино', price: 1600 },
      { id: 'cc-5', name: 'Frappuccino', nameRu: 'Фраппучино', nameKz: 'Фраппучино', price: 1800 },
      { id: 'cc-6', name: 'Oreo Latte', nameRu: 'Орео-Латте', nameKz: 'Орео-Латте', price: 1800 },
      { id: 'cc-7', name: 'Spanish Affogato', nameRu: 'Spanish Аффогато', nameKz: 'Spanish Аффогато', price: 1700 },
    ],
  },
  {
    id: 'hot-drinks',
    title: 'Hot Drinks',
    titleRu: 'Горячие напитки',
    titleKz: 'Ыстық сусындар',
    icon: <CupSoda size={24} />,
    items: [
      { id: 'hd-1', name: 'Cocoa with Marshmallows', nameRu: 'Какао с маршмеллоу', nameKz: 'Маршмеллоумен какао', price: 1600 },
      { id: 'hd-2', name: 'Hot Chocolate', nameRu: 'Горячий шоколад', nameKz: 'Ыстық шоколад', price: 1500 },
      { id: 'hd-3', name: 'Hazelnut Chocolate', nameRu: 'Фундучный шоколад', nameKz: 'Фундук шоколады', price: 2000 },
    ],
  },
  {
    id: 'matcha',
    title: 'Matcha Tea',
    titleRu: 'Матча чай',
    titleKz: 'Матча шайы',
    icon: <GlassWater size={24} />,
    items: [
      { id: 'mt-1', name: 'Blue Matcha', nameRu: 'Голубая матча', nameKz: 'Көк матча', price: 1800 },
      { id: 'mt-2', name: 'Green Matcha', nameRu: 'Зелёная матча', nameKz: 'Жасыл матча', price: 1900 },
      { id: 'mt-3', name: 'Iced Matcha', nameRu: 'Айс-Матча', nameKz: 'Айс-Матча', price: 1700 },
      { id: 'mt-4', name: 'Iced Mango Matcha', nameRu: 'Айс манго матча', nameKz: 'Айс манго матча', price: 2000 },
      { id: 'mt-5', name: 'Iced Raspberry Matcha', nameRu: 'Айс малина матча', nameKz: 'Айс таңқурай матча', price: 2000 },
    ],
  },
  {
    id: 'tea-house',
    title: 'House-Made Tea',
    titleRu: 'Чай собственного приготовления',
    titleKz: 'Өз дайындауымен шай',
    icon: <GlassWater size={24} />,
    items: [
      { id: 'th-1', name: 'Moroccan Tea', nameRu: 'Марокканский Чай', nameKz: 'Марокко шайы', price: 1400 },
      { id: 'th-2', name: 'Tashkent Tea', nameRu: 'Ташкентский Чай', nameKz: 'Ташкент шайы', price: 1400 },
      { id: 'th-3', name: 'Kazakh Tea with Milk', nameRu: 'Казахский с молоком', nameKz: 'Сүтпен қазақ шайы', price: 1400 },
      { id: 'th-4', name: 'Ginger Tea', nameRu: 'Имбирный Чай', nameKz: 'Зімбір шайы', price: 1400 },
      { id: 'th-5', name: 'Berry Tea', nameRu: 'Ягодный Чай', nameKz: 'Жидек шайы', price: 1400 },
      { id: 'th-6', name: 'Sea Buckthorn Tea', nameRu: 'Облепиховый Чай', nameKz: 'Теңіз итмұрыны шайы', price: 1400 },
    ],
  },
  {
    id: 'tea-loose',
    title: 'Loose Leaf Tea',
    titleRu: 'Чай Листовой',
    titleKz: 'Жапырақ шай',
    icon: <GlassWater size={24} />,
    items: [
      { id: 'tl-1', name: 'Assam Black', nameRu: 'Ассам чёрный', nameKz: 'Ассам қара', price: 900 },
      { id: 'tl-2', name: 'Jasmine', nameRu: 'Жасминовый', nameKz: 'Жасмин', price: 900 },
      { id: 'tl-3', name: 'Milk Oolong', nameRu: 'Молочный Улун', nameKz: 'Сүтті Улун', price: 900 },
      { id: 'tl-4', name: 'Strawberry', nameRu: 'Земляника', nameKz: 'Құлпынай', price: 900 },
      { id: 'tl-5', name: 'Sencha', nameRu: 'Сенча', nameKz: 'Сенча', price: 900 },
      { id: 'tl-6', name: 'Earl Grey', nameRu: 'Эрл-Грей', nameKz: 'Эрл-Грей', price: 900 },
    ],
  },
  {
    id: 'fresh',
    title: 'Fresh Juices',
    titleRu: 'Фреш',
    titleKz: 'Фреш',
    icon: <Droplet size={24} />,
    items: [
      { id: 'fr-1', name: 'Orange', nameRu: 'Апельсиновый', nameKz: 'Апельсин', price: 2500 },
      { id: 'fr-2', name: 'Apple', nameRu: 'Яблочный', nameKz: 'Алма', price: 2500 },
      { id: 'fr-3', name: 'Mix', nameRu: 'Микс', nameKz: 'Микс', price: 2500 },
    ],
  },
  {
    id: 'lemonades',
    title: 'Lemonades',
    titleRu: 'Лимонады',
    titleKz: 'Лимонадтар',
    icon: <CupSoda size={24} />,
    items: [
      { id: 'lm-1', name: 'Melon-Raspberry', nameRu: 'Дыня-Малина', nameKz: 'Қауын-таңқурай', price: 1380 },
      { id: 'lm-2', name: 'Mango-Passion Fruit', nameRu: 'Манго-Маракуйя', nameKz: 'Манго-Маракуйя', price: 1380 },
      { id: 'lm-3', name: 'Pear-Lemongrass', nameRu: 'Груша-Лемонграсс', nameKz: 'Алмұрт-Лемонграсс', price: 1380 },
      { id: 'lm-4', name: 'Tropical', nameRu: 'Тропический', nameKz: 'Тропикалық', price: 1380 },
      { id: 'lm-5', name: 'Watermelon-Mango', nameRu: 'Арбуз-Манго', nameKz: 'Қарбыз-Манго', price: 1380 },
      { id: 'lm-6', name: 'Citrus', nameRu: 'Цитрусовый', nameKz: 'Цитрустық', price: 1380 },
      { id: 'lm-7', name: 'Coffee', nameRu: 'Кофейный', nameKz: 'Кофелі', price: 1380 },
      { id: 'lm-8', name: 'Mojito', nameRu: 'Мохито', nameKz: 'Мохито', price: 1380 },
      { id: 'lm-9', name: 'Pomegranate-Raspberry', nameRu: 'Гранат-малина', nameKz: 'Анар-таңқурай', price: 1380 },
    ],
  },
  {
    id: 'milkshakes',
    title: 'Milkshakes',
    titleRu: 'Милк-Шейк',
    titleKz: 'Милк-Шейк',
    icon: <CupSoda size={24} />,
    items: [
      { id: 'ms-1', name: 'Classic', nameRu: 'Классический', nameKz: 'Классикалық', price: 2000 },
      { id: 'ms-2', name: 'Strawberry', nameRu: 'Клубничный', nameKz: 'Құлпынай', price: 2000 },
      { id: 'ms-3', name: 'Banana', nameRu: 'Банановый', nameKz: 'Банан', price: 2000 },
      { id: 'ms-4', name: 'Berry', nameRu: 'Ягодный', nameKz: 'Жидек', price: 2000 },
      { id: 'ms-5', name: 'Snickers', nameRu: 'Сникерс', nameKz: 'Сникерс', price: 2000 },
    ],
  },
  {
    id: 'smoothies',
    title: 'Smoothies',
    titleRu: 'Смузи',
    titleKz: 'Смузи',
    icon: <CupSoda size={24} />,
    items: [
      { id: 'sm-1', name: 'Chocolate with Banana', nameRu: 'Шоколадный с Бананом', nameKz: 'Бананмен шоколадты', price: 2400 },
      { id: 'sm-2', name: 'Berry with Banana', nameRu: 'Ягодный с бананом', nameKz: 'Бананмен жидек', price: 2400 },
      { id: 'sm-3', name: 'Strawberry with Yogurt', nameRu: 'Клубничный с Йогуртом', nameKz: 'Йогуртпен құлпынай', price: 2400 },
      { id: 'sm-4', name: 'Fruit', nameRu: 'Фруктовый', nameKz: 'Жеміс', price: 2400 },
    ],
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('breakfasts');
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());
  const { addItem } = useCart();
  const { t, language } = useLanguage();

  const activeMenu = menuData.find(cat => cat.id === activeCategory);

  const handleAddToCart = (item: MenuItem, categoryId: string) => {
    addItem({
      id: item.id,
      name: item.name,
      nameRu: item.nameRu,
      nameKz: item.nameKz,
      price: item.price,
      category: categoryId,
    });
    setAddedItems(new Set(addedItems).add(item.id));
    setTimeout(() => {
      setAddedItems((prev) => {
        const next = new Set(prev);
        next.delete(item.id);
        return next;
      });
    }, 2000);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price) + '₸';
  };

  const getItemName = (item: MenuItem) => {
    if (language === 'ru') return item.nameRu;
    if (language === 'kz') return item.nameKz;
    return item.name;
  };

  const getCategoryName = (category: MenuCategory) => {
    if (language === 'ru') return category.titleRu;
    if (language === 'kz') return category.titleKz;
    return category.title;
  };

  const getItemDescription = (item: MenuItem) => {
    if (language === 'ru') return item.descriptionRu || item.description;
    if (language === 'kz') return item.descriptionKz || item.description;
    return item.description;
  };

  return (
    <section id="menu" className="py-12 sm:py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#f5f1eb' }}>
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#c4b550]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c4b550]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 relative">
          {/* Decorative coffee drip */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 opacity-20">
            <div className="w-2 h-12 bg-[#c4b550] rounded-full animate-coffee-drip" />
          </div>
          
          <div className="inline-flex items-center gap-2 text-[#c4b550] text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6 font-medium">
            <Sparkles size={14} className="sm:w-4 sm:h-4 animate-pulse" />
            <span>{t('menu.title')}</span>
            <Sparkles size={14} className="sm:w-4 sm:h-4 animate-pulse" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-[#2c2416] mb-4 sm:mb-6 tracking-tight px-4 relative">
            <span className="relative">
              {t('menu.heading')}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#c4b550] to-transparent" />
            </span>
          </h2>
          <div className="w-16 sm:w-20 h-px bg-gradient-to-r from-transparent via-[#c4b550]/40 to-transparent mx-auto mb-4 sm:mb-6" />
          <p className="text-sm sm:text-base md:text-lg text-[#2c2416]/70 max-w-xl mx-auto font-light px-4">
            {t('menu.description')}
          </p>
        </div>

        {/* Category Tabs - Horizontal Scroll on Mobile */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="flex overflow-x-auto scrollbar-hide pb-2 gap-2 sm:gap-3 sm:justify-center sm:flex-wrap">
            {menuData.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group flex items-center gap-2 sm:gap-2.5 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium text-xs sm:text-sm whitespace-nowrap transition-all duration-300 flex-shrink-0 relative overflow-hidden ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-[#2c2416] to-[#4a3428] text-white shadow-lg shadow-[#c4b550]/20'
                    : 'bg-white text-[#2c2416]/70 hover:bg-gradient-to-r hover:from-white hover:to-[#faf9f7] border border-[#2c2416]/10 hover:border-[#c4b550]/30 hover:shadow-md'
                }`}
              >
                <span className={activeCategory === category.id ? 'opacity-100' : 'opacity-60'}>
                  {category.icon}
                </span>
                <span className="hidden sm:inline">{getCategoryName(category)}</span>
                <span className="sm:hidden">{getCategoryName(category).split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {activeMenu?.items.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#2c2416]/5 relative overflow-hidden"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.08}s both`,
              }}
            >
              {/* Accent Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#c4b550]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-[#faf9f7] via-amber-50/50 to-orange-50/50 rounded-lg sm:rounded-xl mb-4 sm:mb-6 overflow-hidden relative group-hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-[#c4b550]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#c4b550]/20 to-[#c4b550]/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <UtensilsCrossed className="text-[#c4b550]/40 group-hover:text-[#c4b550]/60" size={20} />
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-start mb-3 sm:mb-4 gap-2">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-medium text-[#2c2416] mb-1 sm:mb-2 group-hover:text-amber-900 transition-colors leading-tight">
                    {getItemName(item)}
                  </h3>
                  {language === 'en' && (
                    <p className="text-xs sm:text-sm text-[#2c2416]/60 font-light line-clamp-2">{item.nameRu}</p>
                  )}
                </div>
                <div className="flex-shrink-0">
                  <span className="text-lg sm:text-xl font-medium text-[#2c2416] whitespace-nowrap">{formatPrice(item.price)}</span>
                </div>
              </div>
              {getItemDescription(item) && (
                <p className="text-xs sm:text-sm text-[#2c2416]/60 mb-3 sm:mb-4 leading-relaxed line-clamp-2 sm:line-clamp-3">{getItemDescription(item)}</p>
              )}
              <button
                onClick={() => handleAddToCart(item, activeCategory)}
                className={`w-full py-2.5 sm:py-3 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden ${
                  addedItems.has(item.id)
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg'
                    : 'bg-gradient-to-r from-[#2c2416] to-[#4a3428] text-white hover:from-[#4a3428] hover:to-[#2c2416] hover:shadow-lg hover:shadow-[#c4b550]/20'
                }`}
              >
                {!addedItems.has(item.id) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                )}
                {addedItems.has(item.id) ? (
                  <>
                    <Check size={16} className="sm:w-[18px] sm:h-[18px]" />
                    <span>{t('menu.addedToCart')}</span>
                  </>
                ) : (
                  <>
                    <Plus size={16} className="sm:w-[18px] sm:h-[18px]" />
                    <span>{t('menu.addToCart')}</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
