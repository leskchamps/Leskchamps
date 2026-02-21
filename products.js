// PRODUCTOS COMPARTIDOS - LeskChamps
// Este archivo contiene todos los productos que se usan en todas las páginas

const products = [
    // CHAMPIONES - 6000 cada uno
    { 
        id: 1, 
        name: 'Champión Puma', 
        category: 'calzado', 
        price: 6000, 
        description: 'Calzado premium de alto rendimiento',
        images: ['puma.png', 'puma1.png', 'puma2.png', 'puma3.png', 'puma4.png']
    },
    { 
        id: 2, 
        name: 'Champión Adidas', 
        category: 'calzado', 
        price: 6000, 
        description: 'Zapatilla deportiva de diseño innovador',
        images: ['adidas.png', 'adidas1.png', 'adidas2.png', 'adidas3.png', 'adidas4.png']
    },
    { 
        id: 3, 
        name: 'Champión Nike Air', 
        category: 'calzado', 
        price: 6000, 
        description: 'Calzado con tecnología de punta',
        images: ['nikeair1.png', 'nikeair2.png', 'nikeair3.png', 'nikeair4.png', 'nikeair5.png']
    },
    { 
        id: 4, 
        name: 'Nike Phantom', 
        category: 'calzado', 
        price: 6000, 
        description: 'Diseño premium y confortable',
        images: ['nikephanton.png', 'nikephanton1.png', 'nikephanton2.png', 'nikephaton3.png', 'nikephaton4.png']
    },
    { 
        id: 5, 
        name: 'Nike Zoom', 
        category: 'calzado', 
        price: 6000, 
        description: 'Tecnología de amortiguación avanzada',
        images: ['nikezoom.png', 'nikezoom1.png', 'nikezoom2.png', 'nikezoom3.png']
    },
    { 
        id: 6, 
        name: 'Phantom Blancas', 
        category: 'calzado', 
        price: 6000, 
        description: 'Elegancia en blanco puro',
        images: ['phantonblancas.png', 'phantonblancas1.png', 'phantonblancas2.png', 'phantonblancas3.png', 'phantonblancas4.png']
    },
    { 
        id: 7, 
        name: 'Nike Celeste', 
        category: 'calzado', 
        price: 6000, 
        description: 'Tonalidad celeste fresca',
        images: ['nikeceleste.png', 'nikeceleste1.png', 'nikeceleste2.png', 'nikeceleste3.png', 'nikeceleste4.png']
    },
    { 
        id: 8, 
        name: 'Nike Crema', 
        category: 'calzado', 
        price: 6000, 
        description: 'Tono crema sofisticado',
        images: ['nikecrema.png', 'nikecrema1.png', 'nikecrema2.png', 'nikecrema3.png', 'nikecrema4.png']
    },
    { 
        id: 9, 
        name: 'Nike Rosa', 
        category: 'calzado', 
        price: 6000, 
        description: 'Color rosa vibrante',
        images: ['nikerosa.png', 'nikerosa1.png', 'nikerosa2.png', 'nikerosa3.png', 'nikerosa4.png']
    },
    { 
        id: 10, 
        name: 'Puma Negro', 
        category: 'calzado', 
        price: 6000, 
        description: 'Clásico negro elegante',
        images: ['pumanegro1.png', 'pumanegro2.png', 'pumanegro3.png', 'pumanegro4.png', 'pumanegro5.png']
    },
    { 
        id: 11, 
        name: 'Nike 1', 
        category: 'calzado', 
        price: 6000, 
        description: 'Modelo deportivo premium',
        images: ['nike1.png', 'nike2.png', 'nike3.png', 'nike4.png', 'nike5.png']
    },

    // PERFUMES - 1500 cada uno
    { id: 12, name: 'Perfume 1', category: 'perfumes', price: 1500, description: 'Aroma fresco y sofisticado', images: ['perfume.png'] },
    { id: 45, name: 'Perfume 2', category: 'perfumes', price: 1500, description: 'Fragancia elegante', images: ['perfume1.png'] },
    { id: 46, name: 'Perfume 3', category: 'perfumes', price: 1500, description: 'Aroma duradero', images: ['perfume2.png'] },
    { id: 47, name: 'Perfume 4', category: 'perfumes', price: 1500, description: 'Esencia única', images: ['perfume3.png'] },
    { id: 48, name: 'Perfume 5', category: 'perfumes', price: 1500, description: 'Fragancia premium', images: ['perfume4.png'] },
    { id: 49, name: 'Perfume 6', category: 'perfumes', price: 1500, description: 'Aroma exclusivo', images: ['perfume5.png'] },
    { id: 50, name: 'Perfume 7', category: 'perfumes', price: 1500, description: 'Sensación única', images: ['perfume6.png'] },

    // REMERAS DE FÚTBOL - 2000 cada una
    { id: 51, name: 'Remera Fútbol', category: 'futbol', price: 2000, description: 'Jersey oficial de fútbol', images: ['4.jpeg'] },
    { id: 52, name: 'Remera Fútbol', category: 'futbol', price: 2000, description: 'Jersey oficial de fútbol', images: ['5.jpeg'] },
    { id: 53, name: 'Remera Fútbol', category: 'futbol', price: 2000, description: 'Jersey oficial de fútbol', images: ['6.jpeg'] },
    { id: 54, name: 'Remera Fútbol', category: 'futbol', price: 2000, description: 'Jersey oficial de fútbol', images: ['7.jpeg'] },
    { id: 55, name: 'Remera Fútbol', category: 'futbol', price: 2000, description: 'Jersey oficial de fútbol', images: ['8.jpeg'] },
    { id: 56, name: 'Remera Fútbol', category: 'futbol', price: 2000, description: 'Jersey oficial de fútbol', images: ['10.jpeg'] },
    { id: 57, name: 'Remera Fútbol', category: 'futbol', price: 2000, description: 'Jersey oficial de fútbol', images: ['11.jpeg'] },
    { id: 58, name: 'Remera Fútbol', category: 'futbol', price: 2000, description: 'Jersey oficial de fútbol', images: ['12.jpeg'] },
    { id: 59, name: 'Remera Fútbol', category: 'futbol', price: 2000, description: 'Jersey oficial de fútbol', images: ['13.jpeg'] },
    { id: 60, name: 'Remera Fútbol', category: 'futbol', price: 2000, description: 'Jersey oficial de fútbol', images: ['14.jpeg'] },

    // REMERAS CASUAL - 850-900 cada una
    { id: 14, name: 'Remera Casual', category: 'remeras', price: 850, description: 'Diseño exclusivo', images: ['remera.png'] },
    { id: 15, name: 'Remera Casual', category: 'remeras', price: 850, description: 'Estilo moderno', images: ['remera2.png'] },
    { id: 16, name: 'Remera Casual', category: 'remeras', price: 850, description: 'Comfort total', images: ['remera3.png'] },
    { id: 17, name: 'Remera Casual', category: 'remeras', price: 900, description: 'Calidad superior', images: ['remera4.png'] },
    { id: 18, name: 'Remera Casual', category: 'remeras', price: 900, description: 'Diseño atemporal', images: ['remera5.png'] },
    { id: 19, name: 'Remera Casual', category: 'remeras', price: 900, description: 'Elegancia garantizada', images: ['remera6.png'] },
];
