# RESALE webshop – induló projekt

## Fájlok
- `index.html` – az oldal felépítése
- `style.css` – külön stíluslap, reszponzív dizájn
- `script.js` – termékek, kategóriák, termékoldal, képgaléria, kosár és keresés

## Indítás
1. Csomagold ki a ZIP-et.
2. Nyisd meg az `index.html` fájlt böngészőben.
3. Internetkapcsolat kell a Bootstrap CDN-hez, a Google Fontshoz és a bemutató termékképekhez.

## Saját termékek hozzáadása
Nyisd meg a `script.js` fájlt, keresd meg a `const products = [...]` részt.
Másolj le egy termékobjektumot, adj neki egyedi `id`-t, majd módosítsd:
- `brand`: márka
- `name`: terméknév
- `category`: Sneakerek / Használt sneakerek / Ruházat / Táskák / Kiegészítők / Tisztítás és ápolás
- `price`: ár forintban, csak szám
- `oldPrice`: régi ár vagy `null`
- `condition`: állapot
- `sizes`: méretek tömbje; ha nincs méretválasztás, legyen `[]`
- `description`: termékleírás
- `images`: képek URL-jei tömbben (több képet is megadhatsz)

## Fontos
Ez egy működő frontend-demó: a kategóriaszűrés, keresés, rendezés, termék részletei, képgaléria és kosár működik.
Valódi rendeléshez még szükséges backend/adatbázis, készletkezelés, admin felület, szállítási és fizetési integráció, valamint jogi oldalak. A termékfotók és adatok jelenleg bemutató tartalmak, cseréld őket a saját, jogszerűen használható képeidre és pontos termékadataidra.
