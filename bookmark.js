(function() {
    // 1. Grab page text
    let pageText = document.body.innerText.substring(0, 3000);
    
    // 2. Create a floating dark-mode card on top of the current website
    let box = document.createElement('div');
    box.style.position = 'fixed';
    box.style.top = '20px';
    box.style.right = '20px';
    box.style.width = '320px';
    box.style.backgroundColor = '#0f172a';
    box.style.color = '#f8fafc';
    box.style.padding = '16px';
    box.style.zIndex = '999999';
    box.style.borderRadius = '12px';
    box.style.boxShadow = '0 10px 25px rgba(0,0,0,0.5)';
    box.style.fontFamily = 'sans-serif';
    
    // 3. Simple layout
    box.innerHTML = `
        <h3 style="color:#38bdf8;margin:0 0 10px 0;">🏠 AI Property Agent</h3>
        <p style="font-size:12px;color:#94a3b8;">Analyzing current webpage content...</p>
        <div id="ai-status" style="font-size:14px;color:#4ade80;font-weight:bold;">Calculating metrics...</div>
        <button onclick="this.parentElement.remove()" style="margin-top:15px;width:100%;background:#334155;color:white;border:none;padding:8px;border-radius:6px;cursor:pointer;">Close</button>
    `;
    
    document.body.appendChild(box);
    
    // 4. Try to parse numbers from the live page automatically
    setTimeout(() => {
        const priceMatch = pageText.match(/£([0-9,]+[\d])/);
        if(priceMatch) {
            let price = parseFloat(priceMatch[1].replace(/,/g, ''));
            let rent = price * 0.006; // estimate standard rental market rate
            let yieldVal = ((rent * 12) / price) * 100;
            document.getElementById('ai-status').innerHTML = `Est. Gross Yield: 🔥 ${yieldVal.toFixed(1)}%<br><span style="font-size:11px;color:#cbd5e1;">Detected Price: £${price.toLocaleString()}</span>`;
        } else {
            document.getElementById('ai-status').innerText = "Could not automatically extract listing price.";
        }
    }, 1000);
})();
