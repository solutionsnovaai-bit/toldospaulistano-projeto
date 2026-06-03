# Toldos Paulistano — Proposta Nova IA Solutions

Landing page de proposta comercial — site estático (HTML/CSS/JS puro, sem build).

## Estrutura
```
.
├── index.html
├── css/style.css
├── js/main.js
└── assets/
    ├── logo.png      (render 3D — hero)
    └── symbol.png    (emblema — nav/favicon)
```

## Deploy no Vercel (via GitHub)
1. Crie um repositório no GitHub e suba estes arquivos (com `index.html` na raiz).
2. No Vercel: **Add New → Project → Import** o repositório.
3. Framework Preset: **Other** · Build Command: *(vazio)* · Output Directory: `.`
4. **Deploy**. A cada `git push`, o Vercel redeploya automático.

> Por ser site estático, não há etapa de build — o Vercel serve os arquivos como estão.

## Editar depois
- **Preço/planos:** seção `<!-- ── PLANOS ── -->` no `index.html`.
- **Cores da marca:** bloco `:root` no `css/style.css`.
- **WhatsApp dos CTAs:** busca por `wa.me/` no `index.html`.

Ref: NIA-2026-TPS01
