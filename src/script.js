:root{
    --bg: #f6f6f7;
    --chat-bg: #ffffff;
    --accent: #1976d2;
    --accent-glow: rgba(25, 118, 210, 0.4);
    --muted: #8a8a8a;
    --input-border: #e6e6e6;
    --bubble-blue: rgba(100,181,246,0.25);
    --bubble-blue-2: rgba(66,165,245,0.22);
}
.dark {
    --bg: #0f1720;
    --chat-bg: #0b1116;
    --accent: #5b8cff;
    --accent-glow: rgba(91, 140, 255, 0.4);
    --muted: #9aa7b2;
    --input-border: #17202a;
    --bubble-blue: rgba(90,100,255,0.08);
    --bubble-blue-2: rgba(130,90,255,0.06);
}

html,body{
    height:100%;
    margin:0;
    background: var(--bg);
    font-family: 'Inter', system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
}

.page {
    height:100%;
    display:flex;
    flex-direction: column;
    box-sizing:border-box;
}

.chat-card {
    width:100%;
    height:100%;
    background: var(--chat-bg);
    display:flex;
    flex-direction:column;
    position:relative;
    overflow:hidden;
}
.dark .chat-card{
    background: var(--chat-bg);
    box-shadow: none;
}

.chat-header{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:12px;
    padding:8px 18px;
    box-sizing:border-box;
    flex-shrink: 0;
}
.title {
    display:flex;
    gap:12px;
    align-items:center;
}
.title .logo{
    width:32px;height:32px;border-radius:999px;background:linear-gradient(135deg,var(--accent),#4caf50);box-shadow:0 6px 18px rgba(25,118,210,0.18);
}
h1{font-size:1rem;margin:0;color:var(--muted);font-weight:600}
.controls{display:flex;gap:10px;align-items:center}

.chat-area {
    flex:1;
    position:relative;
    display:flex;
    flex-direction:column;
    gap:12px;
    padding:18px;
    box-sizing:border-box;
    min-height: 0;
}

#bgCanvas{
    position:absolute; inset:0; z-index:0;
    pointer-events:none;
}

.message-column{
    position:relative;
    z-index:2;
    flex:1;
    display:flex;
    flex-direction:column;
    gap:12px;
    overflow-y:auto;
    padding:6px 8px;
}

.msg {
    display:flex;
    align-items:flex-end;
    gap:10px;
    max-width:78%;
}
.msg.bot { align-self:flex-start; }
.msg.user { align-self:flex-end; flex-direction:row-reverse; }

.avatar {
    width:40px;height:40px;border-radius:50%;flex-shrink:0;overflow:hidden;background:linear-gradient(135deg,#4caf50,#2196f3);box-shadow:0 6px 16px rgba(0,0,0,0.08);
    display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;
}

.bubble {
    background: #f1f3f5;
    color:#111827;
    padding:12px 14px;
    border-radius:18px;
    box-shadow: 0 8px 20px rgba(16,24,40,0.04);
    line-height:1.35;
    font-size:0.95rem;
    word-wrap:break-word;
}
.dark .bubble { background: #0f1720; color: #e6eefb; box-shadow: 0 8px 20px rgba(0,0,0,0.6); }

.typing {
    display:inline-flex;align-items:center;gap:6px;padding:10px 12px;border-radius:14px;background:transparent;
}
.dots { display:flex;gap:6px;margin:0 6px; }
.dot{ width:8px;height:8px;border-radius:50%;background:var(--muted);opacity:0.25; animation:dotPulse 1s infinite; }
.dot:nth-child(2){ animation-delay:0.15s }
.dot:nth-child(3){ animation-delay:0.3s }
@keyframes dotPulse { 0%{opacity:.25; transform: translateY(0);}50%{opacity:1; transform: translateY(-4px);}100%{opacity:.25; transform: translateY(0);} }

.composer {
    z-index:3;
    display:flex;
    gap:12px;
    padding:14px 18px;
    align-items:center;
    border-top:none;
    background:transparent;
    flex-shrink: 0;
}

.input {
    flex:1;
    display:flex;
    gap:12px;
    align-items:center;
    background:transparent;
    padding:6px;
}
.input textarea{
    width:100%;
    min-height:44px;
    max-height:120px;
    resize:none;
    border-radius:28px;
    padding:12px 16px;
    border:1px solid var(--input-border);
    outline:none;
    box-sizing:border-box;
    font-size:14px;
    font-family:inherit;
}
.send-group { display:flex;gap:10px;align-items:center; }
.dark .input textarea {
    background-color: var(--input-border);
    color: #e6eefb;
    border-color: #2c3a4b;
}
.dark .input textarea::placeholder {
    color: var(--muted);
}

.upload-btn {
    width:44px;height:44px;border-radius:999px;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;position:relative;
    background:linear-gradient(180deg,#16365d,#1565c0); color:white; box-shadow: 0 8px 20px rgba(25,118,210,0.18);
    transition: transform .2s ease, box-shadow .5s ease;
}
.upload-btn:hover{
    transform: translateY(-3px) rotate(15deg);
    box-shadow: 0 14px 30px rgba(25,118,210,0.25);
}
.upload-btn:active{
    transform: translateY(-1px) rotate(90deg);
    box-shadow: 0 0 15px 4px var(--accent-glow);
}
.upload-btn .plus {
    font-weight:700; font-size:20px; transform-origin:center;
    animation: pulseScale 2.2s infinite;
}
.upload-file-button:hover i {
    transform: scale(1.1) rotate(90deg);
    box-shadow: 0 0 15px var(--dark-purple);
}
@keyframes pulseScale { 0%{ transform:scale(1) } 50%{ transform:scale(1.08) } 100%{ transform:scale(1) } }

.send-btn {
    width:44px;height:44px;border-radius:999px;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;background:#ffffff;color:var(--accent);
    box-shadow: 0 6px 18px rgba(0,0,0,0.06);
    transition: transform .2s ease, box-shadow .2s ease;
}
.send-btn:hover{ transform: translateY(-2px); }
.send-btn:active{
    transform: scale(0.95) rotate(15deg);
    box-shadow: 0 0 15px 4px var(--accent-glow);
}

.file-preview {
    display:flex;gap:10px;align-items:center;padding:8px 10px;border-radius:10px;background:rgba(0,0,0,0.04);
    max-width:230px;overflow:hidden;
}
.file-preview img{ width:56px;height:40px;object-fit:cover;border-radius:6px; }

@media (max-width:720px){
    .avatar{ width:36px;height:36px }
    .upload-btn,.send-btn{ width:40px;height:40px }
    .file-preview img{ width:48px;height:36px }
}
