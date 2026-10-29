const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

export const IMG = {
  // Network & infrastructure
  fiberCables: u("1520869562399-e772f042f422", 1800),
  serverRoom: u("1573164713988-8665fc963095", 1800),
  cityFiber: u("1477959858617-67f85cf4f1df", 1800),
  technician: u("1581092160607-ee22621dd758"),
  routerDevice: u("1606904825846-647eb07f5be2"),
  installer: u("1621905251189-08b45d6a269e"),
  circuit: u("1550751827-4bd374c3f58b", 1600),
  networkGlobe: u("1451187580459-43490279c0fa", 1600),
  dataDesk: u("1631624217902-d14c634ab17c", 1500),
  supportTeam: u("1521737604893-d14cc237f11d", 1400),
  fieldWork: u("1581094271901-8022df4466f9", 1400),

  // TV & entertainment
  livingRoomTv: u("1461151304267-38535e780c79"),
  familyTv: u("1601944177325-f8867652837f"),
  sportsTv: u("1560089000-7433a4ebbd64"),
  cinema: u("1478720568477-152d9b164e26"),
  remoteControl: u("1522869635100-9f4c5e86aa37"),
  streaming: u("1611162617213-7d7a39e9b1d7"),

  // Lifestyle
  remoteWork: u("1521737852567-6949f3f9f2b5"),
  gaming: u("1587202372775-e229f172b9d7"),
  business: u("1543269865-cbf427effbad"),
  smartHome: u("1616469829941-c7200edec809"),
  homeStudy: u("1516534775068-ba3e7458af70"),

  people1: u("1494790108377-be9c29b29330", 320),
  people2: u("1500648767791-00dcc994a43e", 320),
  people3: u("1534528741775-53994a69daeb", 320),
};
