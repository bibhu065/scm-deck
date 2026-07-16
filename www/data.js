/* SCM Deck — content model
   Sources: Basic_Fundamentals.pptx, Basic_SAP_Study_Materials.pptx, and the
   infographic library. Everything here is offline. */

const DATA = {};

/* ---------------------------------------------------------------- GLOSSARY */
DATA.glossary = [
["Supply Chain","The entire chain from raw material to end customer.","Basics"],
["SCM (Supply Chain Management)","Managing the flow of goods, services and information within the supply chain.","Basics"],
["Logistics","The organisation of storage and transportation.","Basics"],
["Procurement","The process of purchasing goods and services.","Sourcing"],
["Sourcing","Selecting and evaluating suppliers.","Sourcing"],
["Lead Time","The time between ordering and receiving goods.","Planning"],
["Just-in-Time (JIT)","Inventory strategy in which goods are delivered only when they are needed.","Planning"],
["Inventory","All the goods a company has in stock.","Inventory"],
["Inventory Turnover","How often inventory is sold and replenished in a given period.","Inventory"],
["Safety Stock","Extra stock to prevent shortages.","Inventory"],
["Stock Keeping Unit (SKU)","Unique code for a specific product.","Inventory"],
["Demand Forecasting","Predicting future customer demand.","Planning"],
["Capacity Planning","Estimate of production capacity needed.","Planning"],
["Bill of Materials (BOM)","List of materials and parts for a product.","Planning"],
["Supply Chain Visibility","Understanding the location and status of products in the chain.","Basics"],
["Distribution","Delivering products to the customer.","Logistics"],
["Distribution Center (DC)","Warehouse that stores and distributes products.","Logistics"],
["Fulfillment","The processing and shipping of customer orders.","Logistics"],
["3PL (Third-Party Logistics)","External party providing logistics services.","Logistics"],
["4PL (Fourth-Party Logistics)","External party that manages the entire chain.","Logistics"],
["Reverse Logistics","Return process from customer to vendor.","Logistics"],
["Cross-Docking","Goods are transferred directly without storage.","Logistics"],
["Freight","Transportation of goods in bulk.","Logistics"],
["Carrier","Party that physically transports goods.","Logistics"],
["Freight Forwarder","Intermediary who organises shipments.","Logistics"],
["LTL (Less than Truckload)","Cargo that does not fill an entire truck.","Logistics"],
["FTL (Full Truckload)","Cargo that utilises an entire truck.","Logistics"],
["Load Planning","Loading freight as efficiently as possible.","Logistics"],
["Transportation Management System (TMS)","Transportation management software.","Systems"],
["Warehouse Management System (WMS)","Warehouse management software.","Systems"],
["Order Management","Processing customer orders.","Planning"],
["Supply Chain Network","All the links and partners within a supply chain.","Basics"],
["Vendor Managed Inventory (VMI)","Supplier manages your inventory.","Sourcing"],
["ABC Analysis","Classification of stock by value and importance.","Inventory"],
["Economic Order Quantity (EOQ)","Ideal order size for minimum cost.","Inventory"],
["Minimum Order Quantity (MOQ)","Smallest quantity that can be ordered.","Sourcing"],
["On-Time Delivery (OTD)","Percentage of deliveries that arrive on time.","KPI"],
["Order Lead Time","Time between order placement and delivery.","Planning"],
["Outsourcing","Outsourcing work to external parties.","Sourcing"],
["Risk Management","Recognising and managing risks.","Basics"],
["Supplier Relationship Management (SRM)","Structured management of the supplier base.","Sourcing"],
["Supply Chain Resilience","Resilience of the chain to disruptions.","Basics"],
["Supply Chain Integration","Coordination between links in the chain.","Basics"],
["CPFR","Collaborative Planning, Forecasting and Replenishment — joint planning between partners.","Planning"],
["EDI (Electronic Data Interchange)","Electronic exchange of documents.","Systems"],
["Blockchain in SCM","Technology for transparency and traceability.","Systems"],
["Incoterms","International agreements on delivery responsibilities.","Sourcing"],
["Total Cost of Ownership (TCO)","Total cost of acquisition and use.","Sourcing"],
["Kaizen","Continuous improvement of processes.","Quality"],
["Lean Manufacturing","Production with the least possible waste.","Quality"],
["Six Sigma","Quality improvement methodology.","Quality"],
["Agile Supply Chain","Flexible chain that responds quickly to change.","Basics"],
["Cold Chain","Conditioned chain for perishable goods.","Logistics"],
["Green Logistics","Sustainable logistics processes.","Logistics"],
["Order-to-Cash (O2C)","From order to payment.","Systems"],
["Procure-to-Pay (P2P)","From purchase requisition to payment.","Sourcing"],
["Supply Planning","Planning the required supply chain capacity.","Planning"],
["Demand Planning","Planning based on expected customer demand.","Planning"],
["Advanced Planning and Scheduling (APS)","Advanced planning software.","Systems"],
["SCOR Model","Reference model for supply chain performance.","Basics"],
["KPI (Key Performance Indicator)","Measure of performance.","KPI"],
["Fill Rate","Degree to which customer demand is met.","KPI"],
["Cycle Counting","Periodic control of inventory.","Inventory"],
["Dead Stock","Unsalable stock.","Inventory"],
["Obsolete Inventory","Inventory that can no longer be used or sold.","Inventory"],
["Perpetual Inventory","Inventory system that continuously updates.","Inventory"],
["Physical Inventory","Manual stock count.","Inventory"],
["Lot Tracking","Track inventory by lot.","Quality"],
["Serialized Inventory","Inventory tracked by serial number.","Quality"],
["Order Cycle Time","Time between order receipt and shipment.","KPI"],
["DRP","Distribution Requirement Planning — inventory planning for distribution.","Planning"],
["MRP","Material Requirement Planning — material requirement planning.","Planning"],
["ERP","Enterprise Resource Planning — software for business processes.","Systems"],
["SCM Software","Digital tools for supply chain management.","Systems"],
["Capacity Utilization","Ratio of used to available capacity.","KPI"],
["Total Quality Management (TQM)","Organisation-wide quality approach.","Quality"],
["Kitting","Bundling items into a shipping-ready set.","Logistics"],
["Drop Shipping","Supplier delivers directly to customer.","Logistics"],
["Transportation Mode","Method of transportation such as air, sea or road.","Logistics"],
["Inbound Logistics","Flow of goods towards the company.","Logistics"],
["Outbound Logistics","Flow of goods towards the customer.","Logistics"],
["Forward Logistics","Normal flow of goods from producer to customer.","Logistics"],
["Omnichannel","Seamless experience across multiple sales channels.","Logistics"],
["Track and Trace","Tracking shipments in real time.","Logistics"],
["Customs Clearance","Clearing goods at customs.","Trade"],
["Harmonized System (HS Code)","Global coding for commodity classification.","Trade"],
["Freight Bill","Invoice for transportation services.","Trade"],
["Proof of Delivery (POD)","Confirmation that delivery has been received.","Logistics"],
["Tariff","Tax on imported goods.","Trade"],
["Free Trade Agreement (FTA)","Trade treaty between countries.","Trade"],
["Reorder Point","Stock level at which to reorder.","Inventory"],
["Bullwhip Effect","Fluctuations in demand lead to greater inventory fluctuations upstream.","Planning"],
["Demand Variability","Changes in customer demand.","Planning"],
["Containerization","Use of standard containers in transportation.","Logistics"],
["E-commerce Fulfillment","Logistics for online orders.","Logistics"],
["Omni Inventory","Stock visibility across all sales channels.","Inventory"],
["Service Level Agreement (SLA)","Agreements about the service to be provided.","Sourcing"],
["Net Requirements","Stock required after corrections for stock and receipts.","Planning"],
["Master Production Schedule (MPS)","Scheduling of finished products.","Planning"],
["Last Mile Delivery","Final part of the delivery process to the customer.","Logistics"],
["Backflush","Automatic posting of component consumption at order confirmation.","Planning"],
["ATP (Available-to-Promise)","Check that confirms whether stock can be promised to a requirement.","Planning"],
["PIR (Planned Independent Requirement)","Forecast demand entered in demand management (MD61).","Planning"],
["Planning Time Fence","Frozen period in which MRP will not automatically change proposals.","Planning"],
["Strategy Group","Master data field that decides make-to-stock vs make-to-order planning.","Planning"],
["Source List","List of approved vendors for a material in a plant for a period (ME01).","Sourcing"],
["Quota Arrangement","Splits procurement quantity across several sources.","Sourcing"],
["Purchasing Info Record","Links vendor and material, stores price and lead time (ME11).","Sourcing"],
["Outline Agreement","Long-term contract or scheduling agreement with a vendor (ME31K/ME31L).","Sourcing"],
["Subcontracting","Components are sent to a vendor who returns the finished product; you pay the service charge.","Sourcing"],
["Consignment","Vendor owns the stock until you consume it.","Sourcing"],
["S&OP","Sales & Operations Planning — balancing demand and supply on one plan.","Planning"],
["IBP","Integrated Business Planning — S&OP extended to every function and the P&L.","Planning"],
["Industry 4.0","Integration of IoT, AI, robotics and cloud into manufacturing for smart, connected systems.","Systems"]
];

/* -------------------------------------------------------------- FUNDAMENTALS */
DATA.fundamentals = [
{
  id:"abc", title:"ABC Analysis", kicker:"Inventory control",
  lead:"Inventory split into three classes by descending value. Built on the Pareto principle — roughly 20% of items carry 80% of the value.",
  table:{head:["Class","% of quantity","% of value","Importance","Control","Priority"],
  rows:[["A","10%","70%","High value items","Tight","1st"],["B","20%","20%","Medium value items","Medium","2nd"],["C","70%","10%","Low value items","Basic","3rd"]]},
  blocks:[
    {h:"A — tight control", l:["Check stock level periodically","Make budgets","Evaluate issues","Avoid stock-out by making extra efforts","Store in secured areas","Have EOQ for every material in this class"]},
    {h:"B — medium control", l:["Control when there is a need"]},
    {h:"C — basic control", l:["Minimum control is required"]}
  ],
  note:"ABC applies to raw materials as well as finished goods. It exists so managers spend their time on the items that carry the value.",
  tool:"abc"
},
{
  id:"xyz", title:"XYZ Analysis", kicker:"Demand variability",
  lead:"Classifies items by how variable their demand is, using the coefficient of variation (CV = standard deviation of demand ÷ mean demand).",
  table:{head:["Class","Demand variability","Ordering rhythm","Forecastability"],
  rows:[["X","Lowest","Frequent, perhaps daily","Reliable forecasts"],["Y","Moderate, usually from a known factor","Every few weeks","Forecastable with care"],["Z","Highest","Infrequent and irregular","Hardest to forecast"]]},
  blocks:[{h:"Why pair it with ABC",l:["AX = high value, stable → automated replenishment, low buffer, JIT or consignment","AZ = high value, erratic → the items that hurt; manual attention","CZ = low value, erratic → simple rules, generous buffers"]}],
  images:["deck/xyz-matrix","deck/xyz-strategy"],
  tool:"xyz"
},
{
  id:"eoq", title:"Economic Order Quantity", kicker:"Order sizing",
  lead:"The order size that minimises total inventory cost — the point where holding cost and ordering cost cross.",
  formula:"Q* = √(2DS / H)",
  legend:[["Q*","EOQ, units per order"],["D","Demand in units, always annualised"],["S","Order cost per purchase order"],["H","Holding cost per unit per year"]],
  blocks:[{h:"Reading it",l:["Number of orders placed annually = D ÷ Q","Demand must be on an annual basis — convert quarterly requirements first","Order cost covers logistics, transportation, arbitrary customs charges","Holding cost covers storage, insurance and similar"]}],
  images:["deck/eoq-curve","deck/eoq-formula"],
  tool:"eoq"
},
{
  id:"turns", title:"Inventory Turnover Ratio", kicker:"Working capital",
  lead:"Measures the average number of days a company takes to turn its inventory into sales.",
  formula:"Days = (Average Inventory ÷ COGS) × 365",
  legend:[["Average Inventory","(Opening Inventory + Closing Inventory) ÷ 2"],["COGS","Cost of goods sold over the same period"]],
  blocks:[
   {h:"More days — bad sign",l:["Low demand for the goods","Poor inventory control","Excess of inventory","Rising cost from storage, obsolescence, insurance and damage"]},
   {h:"Few days — good sign",l:["Inventory is turning over quickly"]}
  ],
  tool:"turns"
},
{
  id:"ss", title:"Safety Stock", kicker:"Buffer against uncertainty",
  lead:"Extra quantity held in the warehouse to prevent an out-of-stock situation. Which formula you use depends on where the uncertainty actually sits.",
  methods:[
   ["1 · Old school","Average consumption per period × number of safety periods"],
   ["2 · Average–max","(Max lead time × max sales) − (Average lead time × average sales)"],
   ["3 · Demand uncertainty only","Z × demand std deviation × √(average lead time)  — recommended"],
   ["4 · Lead time uncertainty only","Z × average sales × lead time std deviation"],
   ["5 · Both, independent","Z × √(avg LT × σdemand² + (avg sales × σLT)²)  — recommended"],
   ["6 · Both, dependent","Z × (σdemand × √(avg LT) + avg sales × σLT)"]
  ],
  formula:"Reorder Point = Safety Stock + Average demand × Average lead time",
  blocks:[{h:"Getting Z",l:["Z is the service coefficient: NORMSINV(target service rate)","90% service → Z = 1.28","95% → 1.65   ·   98% → 2.05   ·   99% → 2.33"]}],
  note:"The worked example from the deck (300 units/yr, 127.4-day average lead time, 90% service) is preloaded in the Safety Stock tool — all six methods side by side.",
  tool:"ss"
},
{
  id:"depindep", title:"Dependent vs Independent Demand", kicker:"Where demand comes from",
  lead:"Independent demand comes from outside — customers ordering finished product. Dependent demand is derived: sub-assemblies, components and raw materials calculated from a parent item through the BOM.",
  table:{head:["","Independent","Dependent"],rows:[
   ["Source","Customer / market","Parent item via BOM explosion"],
   ["Typical item","Finished good","Component, sub-assembly, raw material"],
   ["Determined by","Forecast + sales orders","Calculation — MRP"],
   ["SAP element","IndReq, CusReq","DepReq, OrdRes"]
  ]},
  images:["deck/dep-indep-1","deck/dep-indep-2"]
},
{
  id:"scmlog", title:"SCM vs Logistics", kicker:"Scope",
  lead:"Logistics is a link inside the chain. SCM is the whole network.",
  table:{head:["","Supply Chain","Logistics"],rows:[
   ["Scope","The network of organisations, people, activities, information and resources delivering a product from suppliers to customers","Planning, implementing and controlling the efficient movement and storage of goods, services or information from origin to consumption"],
   ["Horizon","Strategic, end to end","Operational, movement and storage"],
   ["Owns","Sourcing, planning, making, delivering, returning","Transport, warehousing, handling, distribution"]
  ]},
  images:["deck/scm-vs-logistics"]
},
{
  id:"ppsched", title:"Planning vs Scheduling", kicker:"Two different questions",
  lead:"Production Planning decides what, when and how much to produce, based on forecast, demand, capacity and resources. Production Scheduling assigns the exact tasks, timelines and resources — machines, workers, shifts — to achieve that plan.",
  blocks:[
   {h:"Demand vs forecast",l:["Demand is the quantity customers are willing to purchase","A forecast is a prediction of future demand from historical data and market analysis","Confusing the two is how a plan quietly becomes fiction"]},
   {h:"Industry 4.0",l:["The Fourth Industrial Revolution: IoT, AI, robotics and cloud computing integrated into manufacturing","Produces smart, connected, highly efficient systems and real-time, data-driven decisions"]}
  ]
},
{
  id:"ppcscm", title:"PPC vs SCM", kicker:"Two functions, one chain",
  lead:"PPC keeps the factory running efficiently. SCM keeps the entire network running smoothly.",
  table:{head:["","PPC","SCM"],rows:[
   ["Focus","Internal manufacturing efficiency and daily operations","The end-to-end journey of goods and information from suppliers to end consumers"],
   ["Objective","Manufacture quality goods on time, minimise machine downtime, control internal production cost","Optimise the whole network for cost-effectiveness, risk mitigation and customer satisfaction"],
   ["Key activities","Phased production ramp-ups, scheduling, bottleneck analysis, equipment and labour allocation","Demand forecasting, procurement, inventory management, warehousing, transportation and distribution"],
   ["Scope","What to produce, when, and in what quantity","Procurement of raw materials through distribution of finished product"],
   ["Chain","Plan → Schedule → Execute → Monitor & control","Supplier → Procure → Make → Store → Deliver → Customer"]
  ]},
  images:["lib/ppc-vs-scm"]
},
{
  id:"sopibp", title:"S&OP vs IBP", kicker:"Planning cadence",
  lead:"S&OP balances demand and supply. IBP is S&OP with every function and the P&L pulled into one plan.",
  table:{head:["","S&OP","IBP"],rows:[
   ["Objective","Demand − supply = 0","S&OP + alignment of all functions under one plan"],
   ["Built for","Supply chain + manufacturing","S&OP + P&L owners"],
   ["Horizon","18 months","S&OP + 18 months"],
   ["Costs considered","Supply chain + manufacturing","S&OP + workforce + R&D + capital expenses + other costs"],
   ["Finance","Top revenue − COGS","S&OP + all financial planning"],
   ["Metrics","OTIF + forecast accuracy + operational metrics","S&OP + EBITDA + other financial metrics"],
   ["Scenarios","Workable scenarios for supply chain","Optimised scenarios for the company as a whole"]
  ]},
  blocks:[{h:"7 signs S&OP has become a reporting ritual",l:["The same slides appear every month, unchanged","Everyone presents, no one commits","Variances are explained, not resolved","Risks are acknowledged but not owned","The meeting runs exactly on time, every time — no tension, no hard choices","Decisions are deferred to side conversations","Nothing would change if the meeting were cancelled"]}],
  images:["lib/sop-to-ibp","lib/sop-reporting-ritual"]
}
];

/* --------------------------------------------------------------------- KPIs */
DATA.kpiGroups = [
{
 name:"Delivery & service", tone:"teal",
 items:[
  ["OTIF (On Time In Full)","Orders delivered complete and on the promised date ÷ total orders × 100","The single honest measure of whether you kept your promise. Partial credit is not credit."],
  ["On-Time Delivery (OTD)","Deliveries on or before promise date ÷ total deliveries × 100","Ignores completeness — always read next to fill rate."],
  ["Line Fill Rate","Order lines shipped complete first time ÷ total order lines × 100","Line-level view; harsher and more useful than order-level."],
  ["Unit / Volume Fill Rate","Units shipped ÷ units ordered × 100","Kind to you when you ship 95% of a big line and miss a small one."],
  ["Perfect Order Rate","% orders with no error: on time × in full × damage free × correct documentation","Multiplicative — four 95% steps give 81%."],
  ["Order Cycle Time","Time from order receipt to shipment","Splits into processing, picking, staging, loading."],
  ["Backorder Rate","Backordered lines ÷ total lines × 100","Rising backorders are a demand or supply signal, not an admin problem."]
 ]
},
{
 name:"Inventory & capital", tone:"amber",
 items:[
  ["Inventory Turns","COGS ÷ average inventory value","Turns per year. Higher = leaner, until service breaks."],
  ["Days of Inventory (DIO)","(Average inventory ÷ COGS) × 365","Same number in days. Deck formula."],
  ["Cash-to-Cash Cycle","DIO + DSO − DPO","Days cash is trapped. Negative is the dream."],
  ["Stock Cover","Current stock ÷ average demand per period","Reads in weeks or days — planners' everyday unit."],
  ["Excess & Obsolete (E&O) %","Value of excess + obsolete ÷ total inventory value × 100","Where forecast error goes to die."],
  ["Inventory Accuracy","Locations counted correct ÷ locations counted × 100","Below ~98% and MRP starts lying to you."],
  ["Dead Stock %","Value of stock with no movement in N months ÷ total value","Choose N deliberately — 6, 12, or item life."],
  ["GMROI","Gross margin ÷ average inventory cost","Ties inventory to profit, not just volume."]
 ]
},
{
 name:"Forecast & demand", tone:"violet",
 items:[
  ["Forecast Accuracy (WMAPE)","1 − Σ|Actual − Forecast| ÷ ΣActual","Weighted by volume, measured at the level where decisions are made."],
  ["Forecast Bias","Σ(Actual − Forecast) ÷ ΣForecast","Says whether you're systematically over or under. Bias is worse than error."],
  ["Forecast Value Add (FVA)","Accuracy after − Accuracy before","Negative FVA means the planning process added noise."],
  ["Demand Volatility (CoV)","Standard deviation of demand ÷ mean demand","The X/Y/Z engine. Higher CoV = less predictable."],
  ["Consensus Forecast Accuracy","|Actual − Consensus forecast| ÷ Actual","How good the final cross-functional number is after Sales, Marketing and Finance touch it."],
  ["Forecast Stability","|Forecastₜ − Forecastₜ₋₁| ÷ Forecastₜ₋₁","How much the number moves after it should have been locked."],
  ["Accuracy vs Inventory Outcome","Excess ≈ over-forecast × unit cost; stockouts ≈ under-forecast × shortfall","Whether accuracy actually bought you anything."]
 ]
},
{
 name:"Sourcing & supplier", tone:"coral",
 items:[
  ["Supplier OTIF","Supplier deliveries on time and in full ÷ total × 100","Your OTIF is downstream of theirs."],
  ["Purchase Price Variance (PPV)","(Actual price − standard price) × quantity","Favourable PPV bought with excess quantity isn't a saving."],
  ["Supplier Lead Time Variance","Std deviation of actual lead times","Feeds safety stock method 4. Variance costs more than length."],
  ["Supplier Defect Rate / PPM","Rejected parts ÷ received parts × 1,000,000","Quality at the gate."],
  ["Spend Under Management","Spend through managed sourcing ÷ total spend × 100","Everything else is a leak."],
  ["Supplier Concentration","Spend with top N suppliers ÷ total spend × 100","Efficiency on one side, single-point failure on the other."],
  ["Contract Compliance / Maverick Spend","Spend outside contract ÷ total spend × 100","Where negotiated prices quietly evaporate."],
  ["Total Cost of Ownership","Price + logistics + duty + quality + inventory + admin","The only number worth negotiating against."]
 ]
},
{
 name:"Production & capacity", tone:"teal",
 items:[
  ["OEE","Availability × Performance × Quality","World class ≈ 85%. Its power is in the three factors, not the product."],
  ["Capacity Utilisation","Used capacity ÷ available capacity × 100","Above ~85% queues explode. Utilisation is not the goal."],
  ["Schedule Adherence","Orders produced as scheduled ÷ orders scheduled × 100","Measures the plan's credibility."],
  ["Plan Attainment","Actual output ÷ planned output × 100","Read with adherence — hitting volume with the wrong mix is not attainment."],
  ["Changeover Time","Time from last good part to next good part","SMED's target."],
  ["Scrap / Rework Rate","Scrap quantity ÷ total produced × 100","Also corrupts BOM component scrap assumptions if untracked."],
  ["Manufacturing Cycle Time","Order release to goods receipt of finished goods","Sets in-house production time in MRP 2."]
 ]
},
{
 name:"Logistics & warehouse", tone:"amber",
 items:[
  ["Freight Cost per Unit","Total freight cost ÷ units shipped","Normalise before you compare lanes."],
  ["Freight Cost as % of Revenue","Freight spend ÷ revenue × 100","Board-level lens on logistics."],
  ["Truck Fill / Load Utilisation","Volume or weight used ÷ capacity available × 100","Cube out or weigh out — know which one binds."],
  ["Picking Accuracy","Correct picks ÷ total picks × 100","Every error is a return plus a credit note."],
  ["Dock-to-Stock Time","Arrival to available for picking","Hidden lead time no purchasing report shows."],
  ["Warehouse Capacity Utilisation","Occupied locations ÷ total locations × 100","Above ~85% travel distance climbs sharply."],
  ["Damage / Loss Rate","Value damaged or lost ÷ value shipped × 100","Includes returns handling and disposal."],
  ["On-Time Pickup / Delivery by Carrier","Carrier events on time ÷ total × 100","The measure that survives contract review."]
 ]
}
];

/* ------------------------------------------------------------ SAP MASTER DATA */
DATA.masterData = {
 types:{head:["Area","Master data","Key settings","Typical implications"],rows:[
  ["MM","Material Master","Material type, valuation class, purchasing views","Drives procurement, inventory valuation, integration with FI"],
  ["MM","Vendor Master","Account group, reconciliation account, purchasing org","Impacts payment terms, sourcing, compliance"],
  ["MM","Info Records","Vendor–material link, pricing, conditions","Controls automatic PO pricing and source determination"],
  ["PP","BOM","Item category, quantity, validity","Defines product structure; errors cause planning and production issues"],
  ["PP","Routing / Recipe","Work centers, operations, standard times","Impacts scheduling, costing, shop floor execution"],
  ["PP","Work Center","Capacity, cost center link, scheduling parameters","Affects capacity planning and cost allocation"],
  ["SD","Customer Master","Account group, sales area data, partner functions","Determines pricing, credit checks, delivery processing"],
  ["SD","Condition Records","Pricing, discounts, surcharges","Directly influence revenue recognition and profitability"],
  ["FI/CO","GL Accounts","Account groups, field status","Impacts financial reporting and compliance"],
  ["FI/CO","Cost Centers","Hierarchy, controlling area","Drives cost allocation and reporting"],
  ["FI/CO","Profit Centers","Assignment to materials and customers","Enables profitability analysis"]
 ]},
 scenarios:[
  ["Material Master","Raw material vs finished good setup","Wrong material type → incorrect valuation, blocked procurement, or misrouted production orders"],
  ["Vendor Master","Local vendor vs import vendor","Incorrect tax codes or payment terms → compliance issues and delayed payments"],
  ["BOM & Routing","Multi-level BOM with subcontracting","Missing subcontracting settings → production orders fail or costing inaccurate"],
  ["Customer Master","Domestic vs export customer","Incorrect sales area data → wrong pricing, tax errors, or blocked deliveries"],
  ["Work Centers","Shared machine across plants","Capacity overload if not modelled correctly → production delays"]
 ],
 integration:[
  ["MM ↔ FI","Material valuation class links to GL accounts","Wrong setup impacts the balance sheet"],
  ["PP ↔ CO","Work center to cost center assignment","Misallocation of production costs"],
  ["SD ↔ FI","Customer reconciliation account","Incorrect postings affect receivables"],
  ["MM ↔ SD","Material sales views","Missing data blocks order processing"]
 ],
 crud:{head:["Object","Create","Change","Display"],rows:[
  ["Material Master","MM01","MM02","MM03"],["Vendor Master","XK01","XK02","XK03"],
  ["Customer Master","XD01","XD02","XD03"],["BOM","CS01","CS02","CS03"],
  ["Routing","CA01","CA02","CA03"],["Work Center","CR01","CR02","CR03"],
  ["GL Account","FS00","FS00","FS00"],["Cost Center","KS01","KS02","KS03"],
  ["Profit Center","KE51","KE52","KE53"]
 ]},
 tables:[
  ["MARA","General material data — material basic info"],["MARC","Plant-specific data — plant level settings"],
  ["MARD","Storage location data — stock by location"],["MAST","Material to BOM link"],
  ["STPO","BOM components / BOM items"],["MAPL","Material to routing link"],
  ["PLKO / PLPO","Routing header / routing steps"],["CHRD","Batch characteristics"],
  ["MKAL","Production versions"],["EKKO","PO header"],["EKPO","PO item"],["EKBE","PO history"],
  ["MSEG / MATDOC","Material documents"],["MKPF","Material document header"],
  ["MSLB","Stock at vendor"],["RESB","Reservation — components"]
 ],
 views:{head:["Tab / view","Purpose","Key fields"],rows:[
  ["Basic Data 1 & 2","General info used across modules","Base unit, material group, division"],
  ["Classification","Assign class characteristics","Class type, characteristics"],
  ["Sales Org Data 1 & 2","Sales-specific data","Delivering plant, sales unit, tax classification"],
  ["Sales General / Plant","Plant-specific sales data","Availability check, loading group"],
  ["Foreign Trade / Export","Export control data","Export licence, commodity code"],
  ["Sales Text","Texts for sales documents","Description, language"],
  ["MRP 1–4","Material planning parameters","MRP type, lot size, procurement type"],
  ["Work Scheduling","Production scheduling","Production scheduler, in-house production time"],
  ["Plant Data / Storage 1 & 2","Storage and handling","Storage conditions, shelf life"],
  ["Warehouse Management 1 & 2","Warehouse control","Storage type, picking area"],
  ["Quality Management","Inspection and quality control","QM control key, inspection type"],
  ["Accounting 1 & 2","Valuation and costing","Valuation class, price control"],
  ["Costing 1 & 2","Cost estimates","Costing lot size, costing variant"],
  ["Purchasing","Procurement settings","Purchasing group, order unit"],
  ["Foreign Trade / Import","Import control data","Import licence, customs tariff"],
  ["Purchase Order Text","Texts for POs","Description, language"],
  ["Additional Data","Units of measure, EANs","Alternative units, conversion factors"]
 ]}
};

/* ---------------------------------------------------------------- MRP VIEWS */
DATA.mrp = {
 summary:[
  ["MRP 1","When the material is planned","Lot size, reorder point, MRP type, controller, planning time fence, safety stock"],
  ["MRP 2","How it is procured","Procurement type, special procurement, storage location, schedule margin key, backflush"],
  ["MRP 3","Strategy and availability","Strategy group, consumption mode, planning horizon, availability check"],
  ["MRP 4","Execution details","BOM explosion, production version, batch entry, scheduling, dependent requirements"]
 ],
 sections:[
 {
  id:"mrp1", view:"MRP 1", title:"General planning parameters",
  lead:"These settings control when and how the system generates planned orders or purchase requisitions during MRP runs.",
  fields:[
   ["MRP Type","Defines the planning procedure — PD = standard MRP, VB = manual reorder point"],
   ["MRP Controller","Responsible planner ID, used in exception messages"],
   ["Lot Size","Determines procurement quantity — lot-for-lot, fixed lot, minimum lot size"],
   ["Reorder Point","Minimum stock level that triggers replenishment (VB/VM types)"],
   ["Planning Time Fence","Period where the system does not automatically change procurement proposals"],
   ["Safety Stock","Buffer quantity to avoid stockouts"]
  ],
  subs:[
   {t:"MRP Type — the planning rule", table:{head:["Type","Description","Planning trigger","Key use case"],rows:[
     ["PD","Standard MRP","Automatically via MRP run","Most common for production and procurement planning"],
     ["P1/P2/P3","MRP with forecast","Combines forecast and actual demand","Seasonal or demand-driven items"],
     ["VB","Manual reorder point","Triggered when stock < reorder point","Low-value or slow-moving items"],
     ["VM","Automatic reorder point","System calculates reorder point","When historical data is reliable"],
     ["V1/V2","Reorder point with forecast","Adds forecast to reorder logic","Hybrid for semi-critical items"],
     ["ND","No planning","Excluded from MRP","Non-stock or externally managed items"],
     ["X0","External planning","Planned by an external system","APO or third-party planning tools"]
   ]}},
   {t:"MRP Controller", body:"The person or team responsible for planning a material in a plant. A 3-character ID (001, A01) used to filter planning reports, assign responsibility and route exception messages.",
    table:{head:["Attribute","Description"],rows:[
     ["MRP Controller Code","3-character ID assigned to a planner"],["Name","Planner's full name or team name"],
     ["Phone Number","Contact info for coordination"],["Purchasing Group","Optional link to procurement team"],
     ["Business Area","For financial reporting alignment"],["Profit Centre","For cost and profit tracking"],
     ["User ID","SAP user ID for workflow or notifications"]
    ]},
    list:{h:"Where it shows up",l:["MRP runs (MD01/MD02) — filters materials by controller","Exception messages routed to the assigned controller","Reports such as MD06 can be filtered by controller","Workflow notifications and approvals"]},
    best:["Assign logical codes — FG for finished goods, RM for raw materials","Keep contact info updated","Use controller filters in planning dashboards","Align with cost centers and profit centers"]},
   {t:"Lot Size — how much to order", body:"Defines how much quantity should be procured or produced when a requirement is triggered.",
    table:{head:["Code","Procedure","Behaviour"],rows:[
     ["EX","Lot-for-lot","Matches exact requirement quantity"],["FX","Fixed lot size","Always orders a fixed quantity"],
     ["HB","Replenish to maximum","Orders enough to reach max stock"],["MB","Monthly lot size","Combines requirements monthly"],
     ["WB","Weekly lot size","Combines requirements weekly"],["TP","Daily lot size","Combines requirements daily"],
     ["MX","Lot size not fixed","Flexible sizing based on demand"]
    ]},
    table2:{head:["Element","Impact"],rows:[
     ["Minimum Lot Size","Prevents under-ordering; excess stock may result"],
     ["Maximum Lot Size","Prevents over-ordering; may split large demands"],
     ["Rounding Value","Rounds order quantity to nearest multiple — packaging or batch constraints"],
     ["Rounding Profile","Staggered rounding rules, e.g. 10, 25, 50 units"],
     ["Fixed Lot Size","Overrides demand-based sizing; used for batch production"]
    ]},
    best:["EX for critical items with variable demand","FX for batch production or packaging constraints","Set minimum lot size to avoid frequent small orders","Apply rounding values for materials with packaging units","Avoid excessive maximum lot size that splits orders unnecessarily"]},
   {t:"Planning Time Fence", body:"A period in calendar days during which MRP will not automatically change procurement proposals. It freezes short-term planning to avoid constant rescheduling.",
    table:{head:["Firming type","Behaviour"],rows:[
     ["0","No firming; MRP can change proposals even inside the fence"],
     ["1","Firm existing proposals; new requirements inside the fence are not planned"],
     ["2","Firm existing proposals; new requirements inside the fence create new firmed proposals"],
     ["3","Firm existing proposals; new requirements inside the fence create new proposals, not firmed"]
    ]},
    ex:{h:"Example — 15-day fence, firming type 2",l:["Existing planned orders within 15 days → firmed, not rescheduled","New sales order within 10 days → new firmed planned order created","Demand after 20 days → normal MRP proposals generated"]},
    best:["Use for critical items where stability is needed","Firming type 2 for high-value items — new demand covered but stays firm","Avoid very long fences; they reduce flexibility and cause excess stock","Review exception messages regularly to tune the fence"],
    images:["deck/mm-field-guide"]}
  ],
  exceptions:{head:["Exception message","Trigger","Meaning / action"],rows:[
   ["Reschedule In","Requirement date earlier than planned order","Pull the order forward to meet demand"],
   ["Reschedule Out","Requirement date later than planned order","Postpone the order to avoid excess stock"],
   ["Shortage of Stock","Demand > supply within planning horizon","Undercoverage — expedite procurement or production"],
   ["Excess Stock","Supply > demand","Overcoverage — cancel or reschedule orders"],
   ["Lot Size Not Respected","Demand doesn't match lot size settings","Adjust lot size or split orders"],
   ["Safety Stock Violation","Stock falls below safety stock","Increase procurement or adjust safety stock"],
   ["Planning Time Fence Violation","System tries to change proposals inside the fence","Review firming type; adjust fence duration"],
   ["Reorder Point Not Maintained","Reorder point planning set but value missing","Maintain reorder point in MRP 1"],
   ["No Procurement Type Maintained","Procurement type blank","Material excluded from planning — update MRP 1"],
   ["Forecast Missing","Forecast indicator active but no forecast data","Run forecast (MP30/MP38) or adjust the indicator"]
  ]}
 },
 {
  id:"mrp2", view:"MRP 2", title:"Procurement & scheduling",
  lead:"These parameters decide how the material is sourced — make vs buy — and how production orders are scheduled.",
  fields:[
   ["Procurement Type","In-house production (E), external procurement (F), or both (X)"],
   ["Special Procurement","Subcontracting, consignment, stock transfer and similar"],
   ["Production Storage Location","Where material is staged for production"],
   ["Schedule Margin Key","Defines floats for scheduling — release, start, finish"],
   ["Backflush Indicator","Whether consumption is posted automatically at order confirmation"]
  ],
  subs:[
   {t:"Procurement type", table:{head:["Code","Description","Working / implication"],rows:[
     ["E","In-house production","MRP generates planned orders → converted into production or process orders"],
     ["F","External procurement","MRP generates purchase requisitions → converted into purchase orders"],
     ["X","Both","MRP generates planned orders; planner decides to convert into production order or purchase requisition"],
     ["Blank","Not maintained","Material excluded from planning or requires manual intervention"]
   ]}},
   {t:"Special procurement key", body:"Defines exceptions to the standard procurement type — it tells the system to handle the material differently.",
    table:{head:["Key","Description","Working / implication"],rows:[
     ["30","Subcontracting","MRP generates subcontracting purchase requisitions; components are issued to the vendor"],
     ["40","Consignment","Vendor owns stock until consumption; no financial posting until withdrawal"],
     ["45","Stock transfer, plant to plant","MRP generates stock transfer requisitions instead of POs"],
     ["70","Phantom assembly","Exploded in the BOM but not procured; simplifies planning"],
     ["80","Direct procurement","No stock keeping; directly linked to the customer order"],
     ["20","Production in another plant","MRP generates planned orders in the supplying plant"],
     ["Blank","No special procurement","Standard procurement logic applies"]
   ]}},
   {t:"Backflush", body:"An automatic posting method where component consumption is posted at the time of order confirmation rather than by manually issuing materials to production.",
    list:{h:"How it works",l:["Production order created → BOM components assigned","Order confirmation (CO11N) → operator confirms production quantity","System posts goods issue for BOM components, updates stock, posts costs to the order","No manual goods issue (MB1A / MIGO) is required"]},
    ex:{h:"Example",l:["Finished good needing 5 raw materials","Backflush active: operator confirms 100 units → system issues 500 units of raw materials from the BOM, stock reduced, costs posted","Without backflush: operator must manually issue 500 units via a goods issue transaction"]},
    best:["Use for repetitive manufacturing where BOM consumption is predictable","Avoid for expensive or variable components — precious metals, chemicals","Ensure BOM accuracy; wrong quantities cause wrong postings","Combine with batch management for traceability","Train shop floor staff — confirmation drives the postings"]}
  ]
 },
 {
  id:"mrp3", view:"MRP 3", title:"Strategy & availability",
  lead:"These settings control demand management and availability checks. Make-to-order, for example, ensures production only starts after a sales order.",
  fields:[
   ["Strategy Group","Planning strategy — make-to-stock, make-to-order, mixed"],
   ["Consumption Mode","How planned independent requirements are consumed by sales orders"],
   ["Planning Horizon","The period considered in planning runs"],
   ["Availability Check","Determines ATP logic for sales orders"],
   ["Planning Strategy","Links to demand management — forecast vs actual demand"]
  ],
  subs:[
   {t:"Strategy group", body:"A collection of planning strategies. Decides whether the material is planned make-to-stock, make-to-order or mixed, and how PIRs interact with sales orders.",
    table:{head:["Group","Strategy","Description","Use case"],rows:[
     ["10","Make-to-stock","Produced in advance based on forecast","Standard finished goods with stable demand"],
     ["11","MTS with gross requirements planning","Plans without netting stock","When safety stock is critical"],
     ["20","Make-to-order","Production triggered only by sales orders","Customised products"],
     ["30","Production by lot size","Plans based on lot size","Batch-oriented manufacturing"],
     ["40","Planning with final assembly","Combines forecast (PIRs) and sales orders","Seasonal goods, demand-driven items"],
     ["50","Planning without final assembly","Plans semi-finished; final assembly triggered by sales order","Configurable products"],
     ["70","Planning at assembly level","Plans at sub-assembly level","Complex BOM structures"]
    ]},
    ex:{h:"Example — standard fan, strategy group 40",l:["PIR created for 100 units in March","Sales order for 80 units in March","PIR reduced by 80 → remaining PIR = 20","MRP run generates a planned order for the balance 20 units"]},
    best:["10 / 40 for stable demand items","20 / 50 for customised or configurable products","Align consumption mode and availability check with the chosen group","Review forecast accuracy regularly when using PIR strategies"],
    images:["deck/pir-sales-orders","lib/mts-vs-mto"]},
   {t:"Consumption mode", body:"Defines how sales orders, dependent requirements or reservations consume PIRs, so forecast demand is reduced correctly and not double counted.",
    table:{head:["Mode","Working"],rows:[
     ["Backward","Sales orders consume PIRs lying before the requirement date — useful when forecasts are entered earlier than actual demand"],
     ["Forward","Sales orders consume PIRs lying after the requirement date — useful when forecasts are entered later"],
     ["Backward + Forward","Consumes both sides — flexibility when demand timing is uncertain"]
    ]},
    list:{h:"Related fields in MRP 3",l:["Backward consumption period (days) — how far back a sales order can consume PIRs","Forward consumption period (days) — how far forward it can consume","Period indicator — planning buckets: daily, weekly, monthly"]},
    ex:{h:"Example — backward, 10 days",l:["PIR = 100 units on 1 March","Sales order 80 units on 5 March","Order consumes the PIR from 1 March, within the 10-day backward window","PIR reduced to 20 units; MRP generates a planned order for the balance if needed"]}},
   {t:"Availability check (ATP)", body:"Defines how SAP verifies whether a material is available to meet requirements — sales orders, production orders, reservations.",
    table:{head:["Code","Description","Working"],rows:[
     ["01","Daily requirements","Groups requirements by day; normally used for high volume items"],
     ["02","Individual requirements","Checks each requirement separately; precise, for critical items"],
     ["KP","No availability check","Excluded from ATP; non-critical items"],
     ["CH","Collective check","Groups requirements for a collective ATP check"]
    ]},
    list:{h:"Controlling elements",l:["Checking group — scope: daily, hourly, with or without reservations","Scope of check — which elements count: stock, safety stock, planned orders, purchase requisitions","Requirements class — links to planning strategy, controls PIR consumption and ATP logic"]},
    ex:{h:"Example — availability check 02",l:["Sales order entered for 100 units","System checks stock + planned receipts","Only 80 available → ATP confirms 80 and issues a shortage message","MRP run generates a planned order for the balance 20 units"]}},
   {t:"Planning horizon", body:"The time frame in days or weeks within which MRP considers requirements and generates procurement proposals. Demand outside the horizon is ignored until it enters it.",
    ex:{h:"Example — 90-day horizon",l:["Sales order for 100 units in 30 days → planned order created","Sales order for 200 units in 120 days → ignored for now","The planner only sees near-term requirements; long-term demand creates no noise"]},
    best:["Short horizons (30–60 days) for fast-moving items","Longer horizons (90–180 days) for long lead-time items such as imported raw materials","Align with production cycle times and procurement lead times","Combine with the planning time fence in MRP 1 for short-term stability"]}
  ]
 },
 {
  id:"mrp4", view:"MRP 4", title:"BOM & production control",
  lead:"These parameters define how the system handles BOMs and routings during MRP runs, ensuring correct component planning and production execution.",
  fields:[
   ["BOM Explosion","Controls how the BOM is exploded in planning"],
   ["Production Version","Defines which BOM / routing combination is used"],
   ["Batch Entry","Determines batch management during order creation"],
   ["Scheduling Indicator","Whether in-house production is scheduled"],
   ["Dependent Requirements Indicator","Controls how requirements are generated for components"]
  ],
  subs:[]
 }
 ],
 setting_vs_run:[
  ["Tell SAP what stock level you want","Safety stock or coverage profile · existing stock · expected stock (planned, purchase, replenishment, production) · expected demand (forecast) · existing demand"],
  ["Tell SAP how to calculate","MRP group or individual planning strategy"],
  ["SAP counts if stock is enough","Yes → nothing happens. No → produce more or get it externally"],
  ["Tell SAP if internally or externally procured","Procurement type. Internal → convert planned order to process/production order. External → convert planned order to purchase requisition → PO or STO"],
  ["Tell SAP the batch size","Lot size — how much is needed"],
  ["Tell SAP how much time it takes","Lead times — when it is needed"],
  ["Tell SAP when the plan can change","Planning time fence (the time) and MRP type (the rule). Should the existing plan be overwritten by new proposals?"],
  ["Tell SAP if it can confirm proposals","SAP confirms automatically, or the planner evaluates and confirms manually"]
 ]
};

/* -------------------------------------------------------------------- MD04 */
DATA.md04 = {
 lead:"MD04 is the stock/requirements list — the planner's daily window. Every line is an MRP element with a 6-character key. Learn the keys and the screen reads itself.",
 groups:[
  {n:"Stock", tone:"teal", rows:[
   ["Stock","Plant stock"],["SafeSt","Safety stock"],["SLocSt","Storage location stock"],
   ["CustSt","Individual customer stock"],["CCsgmt","Consignment stock for customer (availability check)"],
   ["ProjSt","Project stock"],["SubcSt","Stock with subcontractor"],["BtchSt","Batch stock"],
   ["BtSLoc","Batch / storage location stock"],["QM-lot","Inspection lot for quality management"]
  ]},
  {n:"Orders & receipts", tone:"amber", rows:[
   ["PldOrd","Planned order (also simulation order)"],["PrdOrd","Production order"],
   ["PrcOrd","Process order"],["POConf","Confirmation"],["PMOrdr","Maintenance order"],
   ["NtwOrd","Network order"],["PurRqs","Purchase requisition"],["POitem","Purchase order item"],
   ["SchLne","SA delivery schedule line"],["ShpgNt","Shipping notification"],
   ["JITCll","JIT call"],["JIT-DS","JIT delivery schedule"],["ForcDS","Forecast delivery schedule"]
  ]},
  {n:"Requirements", tone:"coral", rows:[
   ["IndReq","Planned independent requirement"],["CusReq","Customer independent requirement / external sales order"],
   ["DepReq","Dependent requirement"],["SimReq","Simulated / simulated dependent requirement"],
   ["TotReq","Total requirements"],["SubReq","Subcontractor requirements of material provided"],
   ["ForReq","Forecast requirement"],["UnplRq","Unplanned requirement"],["SfyReq","Safety requirement"],
   ["TrnReq","Transfer requirements — WMS"]
  ]},
  {n:"Deliveries & reservations", tone:"violet", rows:[
   ["Delvry","Delivery"],["RetDly","Returns (availability check)"],["CusOrd","Sales order / customer order"],
   ["MtlRes","Reservation"],["OrdRes","Dependent reservation"],["StTRes","Reservation in another plant"],
   ["TrnRes","Stock transfer reservation"]
  ]},
  {n:"Stock transfer / release", tone:"teal", rows:[
   ["Ord.DS","STO placed at hub plant to replenish a warehouse"],["PRqRel","Release order for a stock transfer requisition"],
   ["RelOrd","Release order for a stock transfer order"],["ScAgDS","Release order for stock transport scheduling agreement"],
   ["PlORel","Release order for stock transfer planned order"]
  ]}
 ],
 ordertypes:[["NB","Standard purchase order"],["LA","Stock order"],["RS","Reservation"],["VP","Planned independent requirement"]],
 chains:[
  ["PldOrd (LA)","→ PrcOrd"],
  ["PldOrd (NB)","→ PurRqs → POitem → ShpgNt"],
  ["DepReq","→ OrdRes"],
  ["PlORel","→ PRqRel → Ord.DS"],
  ["CusOrd","→ Delvry"]
 ],
 walkthrough:{
  lead:"A real three-plant network read straight off MD04. 03PM is the hub that produces, 03Z6 and 03Z4 distribute.",
  steps:[
   {p:"03PM — manufacturing plant, procurement type E (internally produced)", img:"deck/md04-plant-03pm", l:[
     "Material sits in a QM lot.","Exception 15: the QM lot should have passed on 30.06.2024 but was rescheduled to 28.07.2024. Exception 20 means the QM lot releasing process was cancelled.",
     "PlORel: stock transfer planned orders have been released from 03PM (supplying) to 03Z6 (receiving)."
   ]},
   {p:"03Z6 — distribution plant, procurement type F (externally procured from 03PM)", img:"deck/md04-plant-03z6", l:[
     "Ord.DS: an STO placed from 03Z6 to 03Z4.","CusOrd: a sales order has been placed in 03Z6.",
     "PldOrd: two planned orders created in 03Z6 — material is unavailable for both the sales order and the STO, so the system generated 5 MT each against a 5 MT sales order and a 5 MT STO."
   ]},
   {p:"03Z4 — distribution plant", img:"deck/md04-plant-03z4", l:[
     "Delvry: a delivery has been created.","POitem: a purchase order created in 03Z4 — here an STO-type PO.",
     "That POitem in 03Z4 reflects in the supplying plant 03Z6 as Ord.DS. Material is unavailable at 03Z6 against that Ord.DS, so a stock transfer planned order (STPO) is created in 03Z6 — visible in the sourcing plant 03PM — and another STPO against the sales order."
   ]}
  ]
 }
};

/* ------------------------------------------------------------ PROCESS FLOWS */
DATA.flows = [
{
 id:"mmpp", title:"MM–PP Integration", tone:"teal", img:"lib/mm-pp-integration",
 lead:"The seamless connection between Materials Management and Production Planning to ensure the right materials are available at the right time for production.",
 chain:["Demand generation (PP)","MRP run (PP)","Requirement creation (PP)","Procurement (MM)","Production execution (PP)","Inventory update (MM)"],
 chainNotes:["Create PIR or forecast","MRP checks stock, explodes BOM, plans orders, identifies shortages","System creates PR, planned order or production order","PR → PO → vendor → goods receipt in inventory","Production order release, goods issue of components, goods receipt of finished goods","Stock updated automatically in MM — raw material consumed, FG received"],
 points:["MRP in PP triggers procurement in MM","Purchase requisition created in PP is converted to a PO in MM","GR in MM updates stock and makes it available for PP","GI of components and GR of FG in PP update inventory in MM","Confirmations in PP update actuals and feed back to planning"],
 tables:[
  {t:"Order types in PP", head:["Order type","Purpose"], rows:[
   ["Planned order (PLORD)","Planning purpose only. No inventory impact"],
   ["Production order (PP01)","For in-house production"],
   ["Process order (PP02)","For process industry"],
   ["Production order with QM (PP03)","For production with quality management"]]},
  {t:"Procurement types in BOM", head:["Type","Meaning"], rows:[
   ["E","Procure externally via PO"],["F","In-house production via PP order"],
   ["X","Special procurement, e.g. subcontracting"],["Q","Stock transfer"]]}
 ],
 issues:["Incorrect BOM or routing","Wrong procurement type","MRP controller not maintained","Lead times not updated","Stock not updated due to missing GI/GR","Backflush configuration issues"],
 questions:["How does MRP link PP with MM in real scenarios?","What is the role of the BOM in procurement planning?","Difference between a planned order and a production order?","What happens if raw material is not available during production?","How does backflushing impact inventory and accounting?"]
},
{
 id:"mmsd", title:"MM–SD Integration", tone:"violet", img:"lib/mm-sd-integration",
 lead:"Real-time flow from sales order to delivery, goods issue and billing, while inventory and financial data update automatically. Right stock, right quantity, right customer, right time.",
 chain:["Sales order (SD)","Delivery creation (SD)","Goods issue — PGI (MM)","Billing (SD)","Accounting (FI)"],
 chainNotes:["Customer places order; system checks availability (ATP) in MM","Delivery document created against the sales order","System posts goods issue using movement type 601; inventory is reduced","Billing document created for the delivery; revenue determined","Financial accounting entries posted automatically"],
 points:["Sales order availability check uses MM inventory","Delivery creation triggers stock reservation","PGI updates inventory in MM","Billing triggers financial accounting in FI","Material master is shared between MM and SD"],
 tables:[
  {t:"Key documents & transactions", head:["Process","SD","MM"], rows:[
   ["Sales order","VA01 / VA02 / VA03","—"],["Delivery","VL01N / VL02N","—"],
   ["Goods issue (PGI)","—","VL02N (movement 601)"],["Billing","VF01 / VF02","—"],
   ["Stock display","VA03 / VL03N","MMBE / MB52 / MB5B"]]},
  {t:"ATP check sequence", head:["#","Checked against"], rows:[
   ["1","Plant stock"],["2","Reserved stock"],["3","In-transit stock"],["4","Stock in other plants, if allowed"]]}
 ],
 issues:["Insufficient stock at delivery creation","Incorrect plant or storage location","Wrong movement type during PGI","Pricing issues during billing","Material master not maintained properly"],
 questions:["What happens to inventory before, at and after PGI?","Which master data is shared between MM and SD?","How does ATP decide what to confirm?"]
},
{
 id:"mmewm", title:"MM–EWM Integration", tone:"amber", img:"lib/mm-ewm-integration",
 lead:"Connects Materials Management and Extended Warehouse Management for real-time inventory synchronisation and bin-level warehouse execution.",
 chain:["Purchase order (MM)","Goods receipt (MM)","Inbound delivery (MM→EWM)","Warehouse processing (EWM)","Stock in EWM","Outbound delivery (MM→EWM)","Warehouse execution (EWM)","Post goods issue (MM)","Inventory update (MM & EWM)"],
 chainNotes:["PO created in MM","GR posted in MM, movement type 101","Inbound delivery created and sent to EWM","Putaway task created; stock placed in storage bin","Stock available at bin level","Outbound delivery sent to EWM for execution","Pick, pack, goods issue, staging","PGI posted in MM, movement type 601","Stock updated in both MM and EWM"],
 points:["Communication is qRFC based and asynchronous","MM stock is at storage location level; EWM stock is at bin level","MM updates on GR/PGI; EWM updates in real time on warehouse tasks","Example: MM = Plant 1000 / SLoc 0001 · EWM = WH 1000 / Bin A-01-01"],
 tables:[
  {t:"Queue management (qRFC)", head:["T-code","Description"], rows:[
   ["SMQ1","Inbound queue (EWM → MM)"],["SMQ2","Outbound queue (MM → EWM)"],
   ["SM58","qRFC monitor"],["WE02","qRFC profile maintenance"]]},
  {t:"Integration scenarios", head:["Scenario","From MM","To EWM","Purpose"], rows:[
   ["Inbound delivery","Create ID","Receive ID","Trigger putaway"],
   ["Outbound delivery","Create OD","Receive OD","Trigger picking & GI"],
   ["Post GI","Post GI (601)","Update stock","Deduct stock in EWM"],
   ["Stock sync","Stock update","Stock update","Keep MM & EWM in sync"],
   ["Cancellation","Cancel ID/OD","Cancel in EWM","Cancel related docs & tasks"]]}
 ],
 issues:["Queue stuck","Document not sent","No update in MM or EWM — check queue, error log, reprocess and monitor"],
 questions:["Where does MM stock end and EWM stock begin?","What breaks when a qRFC queue is stuck?","Why use handling units?"]
},
{
 id:"subcon", title:"Subcontracting", tone:"coral", img:"lib/subcontracting-notes",
 lead:"Raw materials and components are sent to a vendor. The vendor manufactures the finished product and returns it. You pay only for the service charge.",
 chain:["Create PO — item category L (ME21N)","Maintain BOM (CS01/02/03)","Send components — 541 (MIGO)","Monitor stock at vendor (ME20)","Goods receipt for FG — 101 (MIGO)","Invoice verification (MIRO)"],
 chainNotes:["Item category L marks the PO as subcontracting","Components for the finished good","Movement 541 issues components to the vendor","Special stock O — vendor stock","Movement 101; consumption 543 posts automatically","Pay the service charge"],
 points:["541 has no accounting entry — ownership is not transferred, it is only a stock transfer","Stock sits in special stock 'O' (vendor stock)","Components are consumed automatically via 543 (backflush) during GR","Subcontracting cannot be done without a BOM — it is mandatory","541 = issue to vendor · 543 = consumption during GR"],
 tables:[
  {t:"Movement types", head:["Movement","Purpose"], rows:[
   ["541","Send components to vendor"],["542","Return components from vendor"],
   ["543","Consumption, automatic during GR"],["544","Reversal of 543"],
   ["101","Goods receipt for finished material"],["102","Reversal of goods receipt"]]},
  {t:"Transaction event keys (OBYC)", head:["Key","Purpose"], rows:[
   ["BSX","Inventory posting"],["WRX","GR/IR clearing"],["GBB (VBO)","Consumption for subcontracting"],
   ["PRD","Price difference"],["KBS","Consumption, if configured"]]},
  {t:"Accounting entries", head:["Step","Entry"], rows:[
   ["Transfer to vendor (541)","No accounting entry — only stock transfer"],
   ["Goods receipt (101)","Dr Inventory (finished goods) · Cr GR/IR account (WRX)"],
   ["Component consumption (543)","Dr Consumption (GBB–VBO) · Cr Raw material inventory"],
   ["Invoice posting (MIRO)","Dr GR/IR account · Cr Vendor"]]},
  {t:"Important tables", head:["Table","Description"], rows:[
   ["EKKO","PO header"],["EKPO","PO item"],["EKBE","PO history"],
   ["MSEG / MATDOC","Material documents"],["MKPF","Document header"],
   ["MSLB","Stock at vendor"],["RESB","Reservation — components"],["STPO","BOM items"]]}
 ],
 questions:["Why does 541 have no accounting entry?","Where is the stock stored?","How are components consumed?","Can subcontracting be done without a BOM?","Difference between 541 and 543?"]
},
{
 id:"sourcedet", title:"Source Determination", tone:"teal", img:"lib/source-determination",
 lead:"When a PR is created, SAP automatically searches for a valid source of supply instead of the buyer manually searching — saving time and reducing errors.",
 chain:["PR raised","SAP checks sources","Finds contract / source list / info record","PO auto-created with vendor & price","Buyer reviews and sends PO"],
 chainNotes:["MRP auto-creates the PR","Outline agreement, then source list, then info record","Pre-negotiated price applies","Correct vendor and price carried in","Zero manual errors"],
 points:["Search priority: Outline agreement (1st) → Source list (2nd) → Info record (3rd) → Manual via ME57 (last)","Purchase info record (ME11) links vendor + material, stores price and lead time","Source list (ME01) is the approved vendor list with valid date ranges — can be made mandatory","Outline agreement (ME31K / ME31L) carries the pre-negotiated long-term price and has the highest priority","ME57 is used by buyers to assign a source manually when auto determination finds nothing"],
 tables:[
  {t:"Key T-codes", head:["Code","Object"], rows:[
   ["ME11","Info record"],["ME01","Source list"],["ME31K","Contract"],["ME57","Assign source"]]}
 ],
 questions:["Which source wins when a contract and a source list both exist?","When does the system force a source list?","What does a blocked vendor in the source list do to a PR?"]
},
{
 id:"srclist", title:"Source List & Quota Arrangement", tone:"violet", img:"lib/source-list",
 lead:"A source list is a list of approved vendors for a material in a plant for a specific period. It controls the procurement source: fix or approve a vendor, and restrict unwanted ones.",
 chain:["Create source list (ME01)","Maintain vendor + validity","Mark fixed vendor (optional)","System picks vendor during PR/PO","If multiple vendors → works with quota"],
 chainNotes:["ME01 create · ME02 change · ME03 display","Valid from / valid to","The system will always pick the fixed vendor","Used during PR/PO creation","Quota arrangement splits the quantity"],
 points:["Source list is master data","It can restrict procurement","Important fields: material, plant, vendor, valid from/to, fixed vendor, blocked vendor, source list requirement","If 'source list mandatory' is set, the system forces it"],
 tables:[
  {t:"Source list vs quota arrangement", head:["Basis","Source list","Quota arrangement"], rows:[
   ["Purpose","Vendor control","Quantity split"],["Type","Master data","Planning tool"],
   ["Used in","PR / PO creation","PO quantity distribution"],["Result","Controls vendor","Controls quantity"]]},
  {t:"Example — Steel Rod, plant 1000", head:["Document","Vendor","Status","Valid from","Valid to"], rows:[
   ["ME01","ABC Ltd.","Fixed ✓","01.04.2024","31.03.2025"],
   ["ME01","XYZ Ltd.","Allowed","01.04.2024","31.03.2025"]]}
 ],
 questions:["What does the fixed indicator actually do at PO creation?","When would you block a vendor rather than remove them?"]
},
{
 id:"rem", title:"Repetitive Manufacturing (REM)", tone:"amber", img:"lib/rem-process",
 lead:"End-to-end REM in SAP PP — period-based, rate-driven production with backflushing and a product cost collector instead of individual production orders.",
 chain:["Configuration (IMG)","Master data setup","Planning (MRP)","Production execution","Period-end settlement"],
 chainNotes:["Define REM profile — backflushing, goods movement, order reduction. Order type RM01 for product cost collectors. Confirmation parameters (OPK4)","MM01 with repetitive mfg indicator + REM profile, selection method = production version; BOM; rate routing (CA21); production version; product cost collector (KKF6N)","Demand management (MD61) for PIRs; MRP run (MD01/MD02) generates planned orders","Planning table (MF50) to review and adjust; pull list (MF60) to replenish components to the line; backflush (MFBF) reduces planned order quantities","KKS1 / CO88 settlement"],
 points:["Run schedule quantities → automatic backflush → product cost collector","Selection method must be set to 'production version'","The rate routing carries the production rate, e.g. 120/hr"],
 tables:[
  {t:"Key transactions", head:["Code","Use"], rows:[
   ["OPK4","Confirmation parameters"],["MM01","Material master — REM profile"],["CS01","BOM"],
   ["CA21","Rate routing"],["MD61","Planned independent requirements"],["MD01 / MD02","MRP run"],
   ["MF50","Planning table"],["MF60","Pull list"],["MFBF","Backflush"],["KKF6N","Product cost collector"],["CO88","Period-end settlement"]]}
 ],
 questions:["Why does REM use a product cost collector instead of order-level costing?","What breaks if the production version is missing?"]
}
];

/* ------------------------------------------------------------------ T-CODES */
DATA.tcodes = [
["MIGO","Goods movement — GR, GI, transfer posting","Inventory"],
["MB1A","Goods issue","Inventory"],["MB1B","Transfer posting","Inventory"],["MB1C","Other goods receipt","Inventory"],
["MMBE","Stock overview","Inventory"],["MB52","List of warehouse stocks","Inventory"],
["MB5T","Stock in transit","Inventory"],["MB5B","Stock for posting date","Inventory"],
["MB51","Material document list","Inventory"],
["MI01","Create physical inventory document","Inventory"],["MI02","Change physical inventory document","Inventory"],
["MI04","Enter inventory count","Inventory"],["MI07","Post inventory difference","Inventory"],
["MB90","Output processing for goods movement","Inventory"],
["VL01N","Create outbound delivery","Logistics"],["VL02N","Change outbound delivery","Logistics"],
["VL03N","Display outbound delivery","Logistics"],["VL10B","Purchase orders due for delivery","Logistics"],
["VT01N","Create shipment","Logistics"],["VT02N","Change shipment","Logistics"],["VT03N","Display shipment","Logistics"],
["LT01","Create transfer order","Logistics"],["LT02","Change transfer order","Logistics"],["LT03","Display transfer order","Logistics"],
["LX01","Inventory count in WM","Logistics"],["LX02","Stock overview in WM","Logistics"],
["MC.9","Material analysis","Reporting"],["MC.1","Inventory analysis","Reporting"],
["MC.2","Inventory analysis","Reporting"],["MC.3","Inventory analysis","Reporting"],
["COHV","Mass processing of production orders","Reporting"],
["ME21N","Create purchase order","Procurement"],["ME22N","Change purchase order","Procurement"],
["ME23N","Display purchase order","Procurement"],["ME51N","Create purchase requisition","Procurement"],
["ME52N","Change purchase requisition","Procurement"],["ME53N","Display purchase requisition","Procurement"],
["ME31K","Create contract","Procurement"],["ME32K","Change contract","Procurement"],["ME33K","Display contract","Procurement"],
["ME41","Create RFQ","Procurement"],["ME42","Change RFQ","Procurement"],["ME43","Display RFQ","Procurement"],
["ME01","Create source list","Procurement"],["ME02","Change source list","Procurement"],["ME03","Display source list","Procurement"],
["ME11","Create purchasing info record","Procurement"],["ME57","Assign source to purchase requisition","Procurement"],
["ME20","Stock at vendor — subcontracting","Procurement"],["MIRO","Invoice verification","Procurement"],
["MD01N","MRP Live — net change planning","Planning"],["MD01","MRP run — total planning","Planning"],
["MD02","Single item, multilevel — creates purchase requisitions","Planning"],
["MD04","Stock / requirements list","Planning"],["MD06","MRP list — collective display","Planning"],
["MD11","Create planned order","Planning"],["MD12","Change planned order","Planning"],["MD13","Display planned order","Planning"],
["MD50","Multilevel make-to-order planning","Planning"],["MD61","Create planned independent requirements","Planning"],
["MD62","Change planned independent requirements","Planning"],
["MP30","Execute forecast","Planning"],["MP38","Mass forecast","Planning"],
["CO01","Create production order","Production"],["CO02","Change production order","Production"],
["CO03","Display production order","Production"],["CO11N","Order confirmation","Production"],
["MF50","Planning table — repetitive manufacturing","Production"],["MF60","Pull list","Production"],
["MFBF","Backflush — REM","Production"],["KKF6N","Product cost collector","Production"],
["CO88","Period-end settlement","Production"],["OPK4","Confirmation parameters","Production"],
["CA01","Create routing","Master data"],["CA02","Change routing","Master data"],["CA03","Display routing","Master data"],
["CA21","Create rate routing","Master data"],
["CS01","Create BOM","Master data"],["CS02","Change BOM","Master data"],["CS03","Display BOM","Master data"],
["CR01","Create work center","Master data"],["CR02","Change work center","Master data"],["CR03","Display work center","Master data"],
["MM01","Create material master","Master data"],["MM02","Change material master","Master data"],["MM03","Display material master","Master data"],
["XK01","Create vendor","Master data"],["XK02","Change vendor","Master data"],["XK03","Display vendor","Master data"],
["XD01","Create customer","Master data"],["XD02","Change customer","Master data"],["XD03","Display customer","Master data"],
["FS00","GL account master","Master data"],["KS01","Create cost center","Master data"],
["KE51","Create profit center","Master data"],
["VA01","Create sales order","Sales"],["VA02","Change sales order","Sales"],["VA03","Display sales order","Sales"],
["VF01","Create billing document","Sales"],["VF02","Change billing document","Sales"],
["SMQ1","qRFC inbound queue","Systems"],["SMQ2","qRFC outbound queue","Systems"],
["SM58","qRFC monitor","Systems"],["WE02","IDoc / qRFC profile","Systems"]
];

/* ---------------------------------------------------------------- LIBRARY */
DATA.library = [
 ["lib/ppc-vs-scm","PPC vs SCM","Two powerful functions, one strong supply chain","Concepts"],
 ["lib/sop-to-ibp","From S&OP to IBP","The difference written as simple arithmetic","Planning"],
 ["lib/sop-reporting-ritual","7 signs S&OP became a ritual","When the meeting stops deciding anything","Planning"],
 ["lib/demand-planner-metrics","7 metrics demand planners defend","WMAPE, bias, FVA, CoV and the rest","KPI"],
 ["lib/mrp-views","MRP views in material master","How the four views drive production behaviour","SAP PP"],
 ["lib/material-master-pp","Material master in SAP PP","The consultant's essential guide","SAP PP"],
 ["lib/s4hana-master-data","Master data in S/4HANA PP","Material, BOM, work center, routing, version, order","SAP PP"],
 ["lib/sap-master-tables","Key SAP master data tables","MARA, MARC, MARD, MAST, STPO and friends","SAP PP"],
 ["lib/mts-vs-mto","Make to stock vs make to order","How it works and the master data behind it","SAP PP"],
 ["lib/rem-process","End-to-end REM process","Repetitive manufacturing in SAP PP","SAP PP"],
 ["lib/mm-pp-integration","MM–PP integration","From requirement to production","Integration"],
 ["lib/mm-sd-integration","MM–SD integration","Order to cash, end to end","Integration"],
 ["lib/mm-ewm-integration","MM–EWM integration","Accurate inventory, smart warehouse","Integration"],
 ["lib/subcontracting-notes","SAP MM subcontracting","Movement types, accounting entries, interview points","SAP MM"],
 ["lib/subcontracting-flow","Subcontracting flow","The same process, one page","SAP MM"],
 ["lib/source-determination","Source determination","How SAP finds the right vendor","SAP MM"],
 ["lib/source-list","Source list","Approved vendors for a material and plant","SAP MM"],
 ["lib/agri-rnd-2026","Agribusiness R&D 2026","Innovation spend across the majors","Industry"],
 ["deck/scm-vs-logistics","SCM vs Logistics","Where one ends and the other begins","Concepts"],
 ["deck/eoq-curve","EOQ cost curve","Holding cost meets setup cost","Concepts"],
 ["deck/eoq-formula","EOQ formula","Q* = √(2DS/H)","Concepts"],
 ["deck/xyz-matrix","XYZ classes","Consumption value against demand variability","Concepts"],
 ["deck/xyz-strategy","ABC–XYZ strategy","What to do with each cell","Concepts"],
 ["deck/dep-indep-1","Dependent vs independent demand","Where demand originates","Concepts"],
 ["deck/dep-indep-2","Demand types","Parent items and components","Concepts"],
 ["deck/mm-field-guide","Material master field guide","MRP settings and what they do","SAP PP"],
 ["deck/process-areas","Process areas","Planning, PTP, PPQM, OTC, FICO","Integration"],
 ["deck/pir-sales-orders","PIRs and sales orders","Stock vs customer requirements","SAP PP"],
 ["deck/md04-plant-03pm","MD04 — plant 03PM","Hub plant, procurement type E","MD04"],
 ["deck/md04-plant-03z6","MD04 — plant 03Z6","Distribution plant, procurement type F","MD04"],
 ["deck/md04-plant-03z4","MD04 — plant 03Z4","Delivery and STO-type PO","MD04"],
 ["deck/gloss-1","Glossary 1 — basic concepts","Terms 1–10","Glossary"],
 ["deck/gloss-2","Glossary 2 — inventory & orders","Terms 11–20","Glossary"],
 ["deck/gloss-3","Glossary 3 — transportation","Terms 21–30","Glossary"],
 ["deck/gloss-4","Glossary 4 — planning & analysis","Terms 31–40","Glossary"],
 ["deck/gloss-5","Glossary 5 — collaboration","Terms 41–50","Glossary"],
 ["deck/gloss-6","Glossary 6 — quality & flexibility","Terms 51–60","Glossary"],
 ["deck/gloss-7","Glossary 7 — performance & stock","Terms 61–70","Glossary"],
 ["deck/gloss-8","Glossary 8 — systems & processes","Terms 71–80","Glossary"],
 ["deck/gloss-9","Glossary 9 — distribution & trade","Terms 81–90","Glossary"],
 ["deck/gloss-10","Glossary 10 — triggers & e-commerce","Terms 91–100","Glossary"]
];
