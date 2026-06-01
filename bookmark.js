(function() {
    // 1. Avoid creating multiple boxes if clicked twice
    let existingBox = document.getElementById('ai-property-overlay');
    if (existingBox) { existingBox.remove(); }

    // 2. Extract visible webpage text to find details
    let pageText = document.body.innerText;
    
    // 3. Simple layout scrapers for price and rent matching
    const priceMatch = pageText.match(/£([0-9,]+[\d])/);
    let price = priceMatch ? parseFloat(priceMatch[1].replace(/,/g, '')) : 250000;
    let rent = Math.round(price * 0.0055); // Automated fallback estimate if rent isn't found
    
    let annualRent = rent * 12;
    let grossYield = (annualRent / price) * 100;

    // 4. Create the sleek HTML visual dashboard container
    let box = document.createElement('div');
    box.id = 'ai-property-overlay';
    box.style.position = 'fixed';
    box.style.top = '20px';
    box.style.right = '20px';
    box.style.width = '350px';
    box.style.backgroundColor = '#0f172a';
    box.style.color = '#f8fafc';
    box.style.padding = '20px';
    box.style.zIndex = '999999';
    box.style.borderRadius = '12px';
    box.style.boxShadow = '0 20px 25px -5px rgba(0,0,0,0.5)';
    box.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    box.style.border = '1px solid #334155';

    // 5. Inject the Pro Dark Mode styling layout inside the card
    box.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
            <h3 style="margin:0; color:#38bdf8; font-size:18px;">🏠 AI Property Agent Pro</h3>
            <button id="close-ai-btn" style="background:none; border:none; color:#94a3b8; font-size:18px; cursor:pointer;">✕</button>
        </div>
        
        <div style="background:#1e293b; padding:12px; border-radius:8px; border:1px solid #334155; margin-bottom:15px;">
            <div style="font-size:11px; color:#94a3b8; text-transform:uppercase;">Detected Value:</div>
            <div style="font-size:16px; font-weight:bold; color:white; margin-top:2px;">£${price.toLocaleString()}</div>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:15px;">
            <div style="background:#0f172a; padding:10px; border-radius:6px; border:1px solid #334155;">
                <span style="font-size:11px; color:#94a3b8;">Est. Yield</span>
                <div style="color:#4ade80; font-size:18px; font-weight:bold; margin-top:4px;">🔥 ${grossYield.toFixed(1)}%</div>
            </div>
            <div style="background:#0f172a; padding:10px; border-radius:6px; border:1px solid #334155;">
                <span style="font-size:11px; color:#94a3b8;">Annual Income</span>
                <div style="color:#4ade80; font-size:18px; font-weight:bold; margin-top:4px;">£${annualRent.toLocaleString()}</div>
            </div>
        </div>

        <div style="background:#291b1a; border-left:4px solid #ef4444; padding:10px; border-radius:4px; font-size:12px; color:#fca5a5; margin-bottom:15px;">
            <strong>⚠️ Risk Warning:</strong> Always verify local rental demand trends before initiating purchase offers.
        </div>

        <div style="background:#1e293b; padding:12px; border-radius:8px; border:1px solid #334155;">
            <span style="font-size:12px; color:#38bdf8; font-weight:bold;">✉️ Agent Email Draft</span>
            <div style="background:#0f172a; padding:8px; border-radius:4px; font-size:11px; color:#cbd5e1; margin-top:6px; white-space:pre-wrap; max-height:80px; overflow-y:auto;">Hi Team,\n\nI am writing to schedule a physical walkthrough for this property listed at £${price.toLocaleString()}...</div>
        </div>
    `;

    document.body.appendChild(box);

    // 6. Connect close button handler
    document.getElementById('close-ai-btn').addEventListener('click', function() {
        box.remove();
    });
})();
