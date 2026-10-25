import { useState } from 'react'
import {
  Clock,
  Users,
  CheckCircle2,
  FileText,
  ThumbsUp,
  Hand,
  HelpCircle,
  Sparkles
} from 'lucide-react'
import { DECISIONS_LIST } from '../../../data/mockData'
import { formatINR } from '../../../utils/formatters'

export default function ActiveDecisions() {
  const [selectedVotedOption, setSelectedVotedOption] = useState<string>('opt_thalassa')
  const [reactionInCount, setReactionInCount] = useState(3)
  const [userReactedIn, setUserReactedIn] = useState(true)

  const handleToggleVote = (optId: string) => {
    setSelectedVotedOption(optId)
    alert(`Vote recorded for ${optId === 'opt_thalassa' ? 'Thalassa Greek Taverna Dinner' : 'Luxury Catamaran Sunset Cruise'}`)
  }

  const handleToggleIn = () => {
    if (userReactedIn) {
      setReactionInCount((c) => c - 1)
      setUserReactedIn(false)
    } else {
      setReactionInCount((c) => c + 1)
      setUserReactedIn(true)
    }
  }

  const decision1 = DECISIONS_LIST[0]
  const decision2 = DECISIONS_LIST[1]
  const decision3 = DECISIONS_LIST[2]

  return (
    <div className="space-y-6">
      
      {/* ============================================================ */}
      {/* DECISION 1: ACTIVE VOTE (Day 3 Sunset Experience Choice)      */}
      {/* ============================================================ */}
      <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)] p-5 sm:p-6 space-y-4">
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-1 border-b border-neutral-100 text-xs">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-50 text-[#DE3724] border border-rose-200 font-bold">
              <Clock className="w-3.5 h-3.5" />
              <span>{decision1.headerTag}</span>
            </span>

            <span className="text-neutral-500 font-medium">
              {decision1.categoryNote}
            </span>
          </div>

          <div className="flex items-center gap-1 text-neutral-500 font-medium text-[11px]">
            <Users className="w-3.5 h-3.5 text-neutral-400" />
            <span>{decision1.votesSummary}</span>
          </div>
        </div>

        {/* Title & Subtitle */}
        <div>
          <h3 className="text-lg sm:text-xl font-extrabold text-neutral-900 tracking-tight">
            {decision1.title}
          </h3>
          <p className="text-xs text-neutral-500 mt-0.5">
            {decision1.subtitle}
          </p>
        </div>

        {/* AI Tie-Breaker Advice Banner */}
        {decision1.tieBreakerAlert && (
          <div className="p-3 rounded-xl bg-rose-50/80 border border-rose-200/80 text-xs text-neutral-700 space-y-1">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#DE3724] shrink-0" />
              <span className="font-bold text-neutral-900">
                TripMate AI Tie-Breaker Advice
              </span>
              <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-[#DE3724] text-white">
                {decision1.tieBreakerAlert.tag}
              </span>
            </div>
            <p className="text-[11px] text-neutral-600 leading-relaxed pl-6">
              {decision1.tieBreakerAlert.text}
            </p>
          </div>
        )}

        {/* Voting Options: 2 Side-by-Side Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          {decision1.options.map((opt) => {
            const isVoted = selectedVotedOption === opt.id

            return (
              <div
                key={opt.id}
                className={`rounded-2xl border overflow-hidden flex flex-col justify-between transition-all ${
                  isVoted
                    ? 'border-[#DE3724] ring-1 ring-[#DE3724] bg-white shadow-sm'
                    : 'border-neutral-200/90 bg-white hover:border-neutral-300 shadow-2xs'
                }`}
              >
                {/* Photo & Overlays */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                  <img
                    src={opt.imageUrl}
                    alt={opt.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Top Tag */}
                  <span
                    className={`absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-bold shadow-xs ${
                      opt.tagType === 'popular'
                        ? 'bg-[#DE3724] text-white'
                        : 'bg-black/70 backdrop-blur-xs text-white'
                    }`}
                  >
                    {opt.tag}
                  </span>

                  {/* Price Tag Bottom Right */}
                  <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold shadow-xs">
                    {formatINR(opt.costPerPerson)} / person
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900">
                      {opt.title}
                    </h4>
                    <p className="text-[11px] text-neutral-500 mt-1 leading-relaxed">
                      {opt.description}
                    </p>
                  </div>

                  {/* Avatars & Votes */}
                  <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-xs">
                    <div className="flex -space-x-1.5 items-center">
                      {opt.voterAvatars.map((av, idx) => (
                        <img
                          key={idx}
                          src={av}
                          alt="Voter"
                          className="w-5 h-5 rounded-full object-cover border border-white"
                        />
                      ))}
                    </div>

                    <span className="font-bold text-neutral-700 text-[11px]">
                      {opt.votesCount} Votes ({opt.percentage}%)
                    </span>
                  </div>

                  {/* Vote Action Button */}
                  <button
                    type="button"
                    onClick={() => handleToggleVote(opt.id)}
                    className={`w-full py-2 px-3 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-1.5 ${
                      isVoted
                        ? 'bg-[#DE3724] hover:bg-[#C82F1E] text-white shadow-xs'
                        : 'bg-[#F4F4F6] hover:bg-neutral-200 text-neutral-800'
                    }`}
                  >
                    {isVoted ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Confirm My Vote</span>
                      </>
                    ) : (
                      <span>Vote for {opt.title.includes('Cruise') ? 'Cruise' : 'Thalassa'}</span>
                    )}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ============================================================ */}
      {/* DECISION 2: RESOLVED (Where should we stay in North Goa?)    */}
      {/* ============================================================ */}
      <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)] p-5 sm:p-6 space-y-4">
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-1 border-b border-neutral-100 text-xs">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-[10px]">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              <span>{decision2.headerTag}</span>
            </span>

            <span className="text-neutral-500 font-medium">
              {decision2.categoryNote}
            </span>
          </div>

          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-rose-50 text-[#DE3724] border border-rose-200">
            ✓ Booked & Confirmed
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-extrabold text-neutral-900 tracking-tight">
          {decision2.title}
        </h3>

        {/* Options Grid: Winner & Runner-up */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Winner Item */}
          <div className="p-3.5 rounded-xl border border-emerald-200/80 bg-emerald-50/20 flex gap-3.5">
            <img
              src={decision2.options[0].imageUrl}
              alt=""
              className="w-20 h-20 rounded-xl object-cover shrink-0"
            />
            <div className="flex-1 space-y-1">
              <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-[#DE3724] text-white">
                WINNER
              </span>
              <h4 className="text-xs font-bold text-neutral-900">
                {decision2.options[0].title}
              </h4>
              <p className="text-[11px] text-neutral-500">
                {decision2.options[0].description}
              </p>
              <div className="font-extrabold text-xs text-neutral-900 pt-0.5">
                {formatINR(decision2.options[0].costPerPerson)} / night / person
              </div>

              <div className="pt-1.5 flex items-center justify-between text-[10px] text-neutral-500">
                <div className="flex items-center gap-1.5">
                  <div className="flex -space-x-1">
                    {decision2.options[0].voterAvatars.map((av, i) => (
                      <img key={i} src={av} alt="" className="w-4 h-4 rounded-full border border-white" />
                    ))}
                  </div>
                  <span className="font-bold text-neutral-700">3 Votes (75%)</span>
                </div>
                <span className="text-emerald-700 font-semibold flex items-center gap-0.5">
                  <FileText className="w-3 h-3" />
                  <span>Receipt in Files</span>
                </span>
              </div>
            </div>
          </div>

          {/* Runner-up Item */}
          <div className="p-3.5 rounded-xl border border-neutral-200/80 bg-neutral-50/40 flex gap-3.5 opacity-75">
            <img
              src={decision2.options[1].imageUrl}
              alt=""
              className="w-20 h-20 rounded-xl object-cover shrink-0"
            />
            <div className="flex-1 space-y-1">
              <h4 className="text-xs font-bold text-neutral-900">
                {decision2.options[1].title}
              </h4>
              <p className="text-[11px] text-neutral-500">
                {decision2.options[1].description}
              </p>
              <div className="font-extrabold text-xs text-neutral-800 pt-0.5">
                {formatINR(decision2.options[1].costPerPerson)} / night
              </div>

              <div className="pt-2 flex items-center justify-between text-[10px] text-neutral-400">
                <span>1 Vote (Sneha)</span>
                <span className="font-medium">Conceded</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ============================================================ */}
      {/* DECISION 3: NEW SUGGESTION (Add Scuba Diving)                */}
      {/* ============================================================ */}
      <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)] p-5 sm:p-6 space-y-4">
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-1 border-b border-neutral-100 text-xs">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 font-bold text-[10px]">
              <span>💡</span>
              <span>NEW SUGGESTION</span>
            </span>

            <span className="text-neutral-500 font-medium text-[11px]">
              {decision3.categoryNote}
            </span>
          </div>

          <span className="font-extrabold text-neutral-900 text-xs">
            {formatINR(decision3.proposer?.costPerPerson || 3200)} / person
          </span>
        </div>

        {/* Suggestion Card Content */}
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <img
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=400&q=80"
            alt="Scuba diving underwater"
            className="w-full sm:w-44 h-28 object-cover rounded-xl"
          />

          <div className="flex-1 space-y-2">
            <h4 className="text-sm font-bold text-neutral-900">
              {decision3.title}
            </h4>
            <p className="text-xs text-neutral-500 leading-relaxed">
              {decision3.subtitle}
            </p>

            {/* Reactions Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
              <button
                type="button"
                onClick={handleToggleIn}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-bold transition-colors ${
                  userReactedIn
                    ? 'bg-amber-100 text-amber-900 border border-amber-300'
                    : 'bg-[#F4F4F6] text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                <ThumbsUp className="w-3.5 h-3.5" />
                <span>I'm in! {reactionInCount}</span>
              </button>

              <button
                type="button"
                onClick={() => alert('Voted to skip Scuba diving.')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F4F4F6] hover:bg-neutral-200 text-neutral-600 font-medium transition-colors"
              >
                <Hand className="w-3.5 h-3.5" />
                <span>Skip for me 1 (Sneha)</span>
              </button>

              <button
                type="button"
                onClick={() => alert('Requested more details from Arjun.')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F4F4F6] hover:bg-neutral-200 text-neutral-600 font-medium transition-colors"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Need details 0</span>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
