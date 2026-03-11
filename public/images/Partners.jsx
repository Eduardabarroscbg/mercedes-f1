
<div className="flex items-center justify-between">
    <div
        className="px-4 py-2 rounded-lg"
        style={{ backgroundColor: partner.color + "22", border: `1px solid ${partner.color}44` }}
    >
        <span className="font-bold text-lg" style={{ color: partner.color }}>
            {partner.name}
        </span>
    </div>
    <span className="text-white/20 text-xs bg-white/5 px-3 py-1 rounded-full">
        {partner.category}
    </span>
</div>