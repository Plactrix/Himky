export enum IFPoEState {
    auto = 1,
    static = 2,
    limit = 3,
    disable = 4
}
export enum IFStatus {
    up = 1,
    down = 2,
    testing = 3,
    unknown = 4,
    dormant = 5,
    notPresent = 6,
    lowerLayerDown = 7
}
export enum IFType {
    other = 1,
    regular1822 = 2,
    hdh1822 = 3,
    ddnX25 = 4,
    rfc877x25 = 5,
    ethernetCsmacd = 6,
    iso88023Csmacd = 7,
    iso88024TokenBus = 8,
    iso88025TokenRing = 9,
    iso88026Man = 10,
    starLan = 11,
    proteon10Mbit = 12,
    proteon80Mbit = 13,
    hyperchannel = 14,
    fddi = 15,
    lapb = 16,
    sdlc = 17,
    ds1 = 18,
    e1 = 19,
    basicISDN = 20,
    primaryISDN = 21,
    propPointToPointSerial = 22,
    ppp = 23,
    softwareLoopback = 24,
    eon = 25,
    ethernet3Mbit = 26,
    nsip = 27,
    slip = 28,
    ultra = 29,
    ds3 = 30,
    sip = 31,
    frameRelay = 32,
    rs232 = 33,
    para = 34,
    arcnet = 35,
    arcnetPlus = 36,
    atm = 37,
    miox25 = 38,
    sonet = 39,
    x25ple = 40,
    iso88022llc = 41,
    localTalk = 42,
    smdsDxi = 43,
    frameRelayService = 44,
    v35 = 45,
    hssi = 46,
    hippi = 47,
    modem = 48,
    aal5 = 49,
    sonetPath = 50,
    sonetVT = 51,
    smdsIcip = 52,
    propVirtual = 53,
    propMultiplexor = 54,
    ieee80212 = 55,
    fibreChannel = 56,
    hippiInterface = 57,
    frameRelayInterconnect = 58,
    aflane8023 = 59,
    aflane8025 = 60,
    cctEmul = 61,
    fastEther = 62,
    isdn = 63,
    v11 = 64,
    v36 = 65,
    g703at64k = 66,
    g703at2mb = 67,
    qllc = 68,
    fastEtherFX = 69,
    channel = 70,
    ieee80211 = 71,
    ibm370parChan = 72,
    escon = 73,
    dlsw = 74,
    isdns = 75,
    isdnu = 76,
    lapd = 77,
    ipSwitch = 78,
    rsrb = 79,
    atmLogical = 80,
    ds0 = 81,
    ds0Bundle = 82,
    bsc = 83,
    async = 84,
    cnr = 85,
    iso88025Dtr = 86,
    eplrs = 87,
    arap = 88,
    propCnls = 89,
    hostPad = 90,
    termPad = 91,
    frameRelayMPI = 92,
    x213 = 93,
    adsl = 94,
    radsl = 95,
    sdsl = 96,
    vdsl = 97,
    iso88025CRFPInt = 98,
    myrinet = 99,
    voiceEM = 100,
    voiceFXO = 101,
    voiceFXS = 102,
    voiceEncap = 103,
    voiceOverIp = 104,
    atmDxi = 105,
    atmFuni = 106,
    atmIma = 107,
    pppMultilinkBundle = 108,
    ipOverCdlc = 109,
    ipOverClaw = 110,
    stackToStack = 111,
    virtualIpAddress = 112,
    mpc = 113,
    ipOverAtm = 114,
    iso88025Fiber = 115,
    tdlc = 116,
    gigabitEthernet = 117,
    hdlc = 118,
    lapf = 119,
    v37 = 120,
    x25mlp = 121,
    x25huntGroup = 122,
    transpHdlc = 123,
    interleave = 124,
    fast = 125,
    ip = 126,
    docsCableMaclayer = 127,
    docsCableDownstream = 128,
    docsCableUpstream = 129,
    a12MppSwitch = 130,
    tunnel = 131,
    coffee = 132,
    ces = 133,
    atmSubInterface = 134,
    l2vlan = 135,
    l3ipvlan = 136,
    l3ipxvlan = 137,
    digitalPowerline = 138,
    mediaMailOverIp = 139,
    dtm = 140,
    dcn = 141,
    ipForward = 142,
    msdsl = 143,
    ieee1394 = 144,
    ifgsn = 145,
    dvbRccMacLayer = 146,
    dvbRccDownstream = 147,
    dvbRccUpstream = 148,
    atmVirtual = 149,
    mplsTunnel = 150,
    srp = 151,
    voiceOverAtm = 152,
    voiceOverFrameRelay = 153,
    idsl = 154,
    compositeLink = 155,
    ss7SigLink = 156,
    propWirelessP2P = 157,
    frForward = 158,
    rfc1483 = 159,
    usb = 160,
    ieee8023adLag = 161,
    bgppolicyaccounting = 162,
    frf16MfrBundle = 163,
    h323Gatekeeper = 164,
    h323Proxy = 165,
    mpls = 166,
    mfSigLink = 167,
    hdsl2 = 168,
    shdsl = 169,
    ds1FDL = 170,
    pos = 171,
    dvbAsiIn = 172,
    dvbAsiOut = 173,
    plc = 174,
    nfas = 175,
    tr008 = 176,
    gr303RDT = 177,
    gr303IDT = 178,
    isup = 179,
    propDocsWirelessMaclayer = 180,
    propDocsWirelessDownstream = 181,
    propDocsWirelessUpstream = 182,
    hiperlan2 = 183,
    propBWAp2Mp = 184,
    sonetOverheadChannel = 185,
    digitalWrapperOverheadChannel = 186,
    aal2 = 187,
    radioMAC = 188,
    atmRadio = 189,
    imt = 190,
    mvl = 191,
    reachDSL = 192,
    frDlciEndPt = 193,
    atmVciEndPt = 194,
    opticalChannel = 195,
    opticalTransport = 196,
    propAtm = 197,
    voiceOverCable = 198,
    infiniband = 199,
    teLink = 200,
    q2931 = 201,
    virtualTg = 202,
    sipTg = 203,
    sipSig = 204,
    docsCableUpstreamChannel = 205,
    econet = 206,
    pon155 = 207,
    pon622 = 208,
    bridge = 209,
    linegroup = 210,
    voiceEMFGD = 211,
    voiceFGDEANA = 212,
    voiceDID = 213,
    mpegTransport = 214,
    sixToFour = 215,
    gtp = 216,
    pdnEtherLoop1 = 217,
    pdnEtherLoop2 = 218,
    opticalChannelGroup = 219,
    homepna = 220,
    gfp = 221,
    ciscoISLvlan = 222,
    actelisMetaLOOP = 223,
    fcipLink = 224,
    rpr = 225,
    qam = 226,
    lmp = 227,
    cblVectaStar = 228,
    docsCableMCmtsDownstream = 229,
    adsl2 = 230,
    macSecControlledIF = 231,
    macSecUncontrolledIF = 232,
    aviciOpticalEther = 233,
    atmbond = 234,
    voiceFGDOS = 235,
    mocaVersion1 = 236,
    ieee80216WMAN = 237,
    adsl2plus = 238,
    dvbRcsMacLayer = 239,
    dvbTdm = 240,
    dvbRcsTdma = 241,
    x86Laps = 242,
    wwanPP = 243,
    wwanPP2 = 244,
    voiceEBS = 245,
    ifPwType = 246,
    ilan = 247,
    pip = 248,
    aluELP = 249,
    gpon = 250,
    vdsl2 = 251,
    capwapDot11Profile = 252,
    capwapDot11Bss = 253,
    capwapWtpVirtualRadio = 254,
    bits = 255,
    docsCableUpstreamRfPort = 256,
    cableDownstreamRfPort = 257,
    vmwareVirtualNic = 258,
    ieee802154 = 259,
    otnOdu = 260,
    otnOtu = 261,
    ifVfiType = 262,
    g9981 = 263,
    g9982 = 264,
    g9983 = 265,
    aluEpon = 266,
    aluEponOnu = 267,
    aluEponPhysicalUni = 268,
    aluEponLogicalLink = 269,
    aluGponOnu = 270,
    aluGponPhysicalUni = 271,
    vmwareNicTeam = 272,
    docsOfdmDownstream = 277,
    docsOfdmaUpstream = 278,
    gfast = 279,
    sdci = 280,
    xboxWireless = 281,
    fastdsl = 282,
    docsCableScte55d1FwdOob = 283,
    docsCableScte55d1RetOob = 284,
    docsCableScte55d2DsOob = 285,
    docsCableScte55d2UsOob = 286,
    docsCableNdf = 287,
    docsCableNdr = 288,
    ptm = 289,
    ghn = 290,
    otnOtsi = 291,
    otnOtuc = 292,
    otnOduc = 293,
    otnOtsig = 294,
    microwaveCarrierTermination = 295,
    microwaveRadioLinkTerminal = 296,
    ieee8021axDrni = 297,
    ax25 = 298,
    ieee19061nanocom = 299,
    cpri = 300,
    omni = 301,
    roe = 302,
    p2pOverLan = 303,
}
export enum PSUStatus {
    noError = 1,
    generalFailure = 2,
    bistFailure = 3,
    fanFailure = 4,
    tempFailure = 5,
    interlockOpen = 6,
    epromFailed = 7,
    vrefFailed = 8,
    dacFailed = 9,
    ramTestFailed = 10,
    voltageChannelFailed = 11,
    orringdiodeFailed = 12,
    brownOut = 13,
    giveupOnStartup = 14,
    nvramInvalid = 15,
    calibrationTableInvalid = 16,
    noPowerInput = 17
}
export enum MemoryType {
    other = 1,
    board = 2,
    cpqSingleWidthModule = 3,
    cpqDoubleWidthModule = 4,
    simm = 5,
    pcmcia = 6,
    compaqSpecific = 7,
    dimm = 8,
    smallOutlineDimm = 9,
    rimm = 10,
    srimm = 11,
    fbdimm = 12,
    dimmddr = 13,
    dimmddr2 = 14,
    dimmddr3 = 15,
    dimmfbd2 = 16,
    fbDimmddr2 = 17,
    fbDimmddr3 = 18,
    dimmddr4 = 19,
    hpeSpecific = 20,
    dimmddr5 = 21
}
export enum MemoryStatus {
    other = 1,
    notPresent = 2,
    present = 3,
    good = 4,
    add = 5,
    upgrade = 6,
    missing = 7,
    doesNotMatch = 8,
    notSupported = 9,
    badConfig = 10,
    degraded = 11,
    spare = 12,
    partial = 13,
    configError = 14,
    trainingFailure = 15
}
export enum MemoryTechnology {
    other = 1,
    fastPageMode = 2,
    edoPageMode = 3,
    burstEdoPageMode = 4,
    synchronous = 5,
    rdram = 6,
    rdimm = 7,
    udimm = 8,
    lrdimm = 9,
    nvdimm = 10,
    rnvdimm = 11,
    lrnvdimm = 12,
    pmm = 13
}
export enum TempLocation {
    other = 1,
    unknown = 2,
    system = 3,
    systemBoard = 4,
    ioBoard = 5,
    cpu = 6,
    memory = 7,
    storage = 8,
    removableMedia = 9,
    powerSupply = 10,
    ambient = 11,
    chassis = 12,
    bridgeCard = 13
}
export enum TempStatus {
    other = 1,
    ok = 2,
    degraded = 3,
    failed = 4
}
export enum ProcessorDesigner {
    unknown = 1,
    intel = 2,
    amd = 3,
    cyrix = 4,
    ti = 5,
    nexgen = 6,
    compaq = 7,
    samsung = 8,
    mitsubishi = 9,
    mips = 10
}
export enum ProcessorStatus {
    unknown = 1,
    ok = 2,
    degraded = 3,
    failed = 4,
    disabled = 5
}
export enum SystemFormFactor {
    unknown = 1,
    portable = 2,
    laptop = 3,
    desktop = 4,
    tower = 5,
    miniTower = 6,
    rackMount = 7,
    multiboardChasis = 8,
    blade = 9,
    bladeEnclosure = 10
}
export enum SSIDStatus {
    enable = 0,
    disable = 1
}
export enum APStatus {
    up = 1,
    down = 2
}