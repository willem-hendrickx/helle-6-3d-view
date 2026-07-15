import"./modulepreload-polyfill-CSRv37U6.js";var e={audit:null,registry:null,cadIndex:null,families:null,materialLevels:null,anchors:null,contract:null,cropManifest:null,sourceBasing:null,sourceReadiness:null,loopQaBoards:null,semanticCadSources:null,validatedSiteContext:null,semanticObjectWorksets:null,joinedObjectCandidates:null,cadDetailCatalog:null,detailEnrichment:null,detailEnrichmentQaBoards:null,cadDetailComponents:null,interchangeManifest:null,facadeAlignment:null,levelConstraints:null,boundLevelConstraints:null,wallRunLevelJoin:null,openingWallRunDimensions:null,opening3dPreparation:null,currentValidationQueue:null,openingInspectorPayload:null,openingCutContract:null,openingCoordinateMeasurements:null,openingWidthReconciliation:null,openingCutlineNarrowing:null,openingWidthNarrowedCandidates:null,openingVerticalDerivationCandidates:null,openingCandidateReadinessMatrix:null,openingMetricCandidatePackets:null,openingVerticalSlotCandidateSelector:null,openingMeshBlockerMatrix:null,openingBoundMetricDimensionDraft:null,promotionReadiness:null,selectedRole:null,stage:`all`,drawingQuery:``,anchorQuery:``},t={audit:`./blender/completeness_audit.json`,registry:`./blender/reconstruction_registry.json`,cadIndex:`./blender/cad_truth_layers/index.json`,families:`./blender/object_family_schema.json`,materialLevels:`./blender/material_level_register.json`,anchors:`./blender/label_anchor_index.json`,contract:`./blender/model_extraction_contract.json`,cropManifest:`./assets/pdf-reference/crop_manifest.json`,sourceBasing:`./blender/source_basing_audit.json`,sourceReadiness:`./blender/source_readiness_gate.json`,loopQaBoards:`./blender/cad_loops/qa_boards.json`,semanticCadSources:`./blender/semantic_cad/index.json`,validatedSiteContext:`./blender/validated_sources/validated_site_context.json`,semanticObjectWorksets:`./blender/semantic_objects/index.json`,joinedObjectCandidates:`./blender/semantic_objects/joined_object_candidates.json`,cadDetailCatalog:`./blender/cad_detail_catalog/index.json`,detailEnrichment:`./blender/semantic_objects/detail_enrichment_manifest.json`,detailEnrichmentQaBoards:`./blender/semantic_objects/detail_enrichment_qa_boards.json`,cadDetailComponents:`./blender/cad_detail_components/index.json`,interchangeManifest:`./blender/interchange_manifest.json`,facadeAlignment:`./blender/facade_reference_alignment.json`,levelConstraints:`./blender/semantic_objects/ground_floor_level_constraints.json`,boundLevelConstraints:`./blender/semantic_objects/ground_floor_bound_level_constraints.json`,wallRunLevelJoin:`./blender/semantic_objects/ground_floor_wall_run_level_join_contract.json`,openingWallRunDimensions:`./blender/semantic_objects/ground_floor_opening_wall_run_dimension_bindings.json`,opening3dPreparation:`./blender/semantic_objects/ground_floor_opening_3d_preparation_contract.json`,currentValidationQueue:`./blender/current_validation_queue.json`,openingInspectorPayload:`./blender/semantic_objects/ground_floor_opening_inspector_payload.json`,openingCutContract:`./blender/semantic_objects/ground_floor_opening_cut_contract.json`,openingCoordinateMeasurements:`./blender/semantic_objects/ground_floor_opening_coordinate_measurements.json`,openingWidthReconciliation:`./blender/semantic_objects/ground_floor_opening_width_reconciliation.json`,openingCutlineNarrowing:`./blender/semantic_objects/ground_floor_opening_cutline_narrowing_workbench.json`,openingWidthNarrowedCandidates:`./blender/semantic_objects/ground_floor_opening_width_narrowed_candidates.json`,openingVerticalDerivationCandidates:`./blender/semantic_objects/ground_floor_opening_vertical_slot_derivation_candidates.json`,openingCandidateReadinessMatrix:`./blender/semantic_objects/ground_floor_opening_candidate_readiness_matrix.json`,openingMetricCandidatePackets:`./blender/semantic_objects/ground_floor_opening_metric_candidate_packets.json`,openingVerticalSlotCandidateSelector:`./blender/semantic_objects/ground_floor_opening_vertical_slot_candidate_selector.json`,openingMeshBlockerMatrix:`./blender/semantic_objects/ground_floor_opening_mesh_blocker_matrix.json`,openingBoundMetricDimensionDraft:`./blender/semantic_objects/ground_floor_opening_bound_metric_dimension_draft.json`,promotionReadiness:`./blender/semantic_objects/three_d_promotion_readiness_matrix.json`},n=e=>document.querySelector(e);r().catch(e=>{console.error(e),document.body.innerHTML=`<main class="qa-shell"><h1>QA viewer failed to load</h1><p>${e.message}</p></main>`});async function r(){let[n,r,l,d,j,N,I,L,R,z,H,G,K,q,J,Y,X,Z,Q,te,ne,re,ie,ae,oe,se,ce,le,ue,de,fe,pe,me,he,ge,$,_e,ve,ye,be]=await Promise.all(Object.values(t).map(e=>a(e)));Object.assign(e,{audit:n,registry:r,cadIndex:l,families:d,materialLevels:j,anchors:N,contract:I,cropManifest:L,sourceBasing:R,sourceReadiness:z,loopQaBoards:H,semanticCadSources:G,validatedSiteContext:K,semanticObjectWorksets:q,joinedObjectCandidates:J,cadDetailCatalog:Y,detailEnrichment:X,detailEnrichmentQaBoards:Z,cadDetailComponents:Q,interchangeManifest:te,facadeAlignment:ne,levelConstraints:re,boundLevelConstraints:ie,wallRunLevelJoin:ae,openingWallRunDimensions:oe,opening3dPreparation:se,currentValidationQueue:ce,openingInspectorPayload:le,openingCutContract:ue,openingCoordinateMeasurements:de,openingWidthReconciliation:fe,openingCutlineNarrowing:pe,openingWidthNarrowedCandidates:me,openingVerticalDerivationCandidates:he,openingCandidateReadinessMatrix:ge,openingMetricCandidatePackets:$,openingVerticalSlotCandidateSelector:_e,openingMeshBlockerMatrix:ve,openingBoundMetricDimensionDraft:ye,promotionReadiness:be}),e.selectedRole=s(),o(),c(),u(),M(),P(),F(),B(),i(),f(),W(),m(),h(),p(),g(),_(),v(),y(),b(),x(),S(),C(),T(),E(),D(),O(),k(),A(),w(),V(),U(),ee()}function i(){let t=e.contract.coverage,r=[[`CAD drawings`,t.cad_drawings_covered],[`CAD entities`,t.cad_entities_preserved],[`Site candidates`,t.site_candidate_entities.toLocaleString(`en-US`)],[`Wall entities`,t.wall_layer_entities.toLocaleString(`en-US`)],[`Wall components`,t.wall_hatch_components.toLocaleString(`en-US`)],[`Opening records`,t.facade_opening_records.toLocaleString(`en-US`)]],i=e.contract.families.map(e=>`<div class="contract-item">
        <strong>${G(e.label)}</strong>
        <small>${G(e.status)} / ${e.source_entity_count.toLocaleString(`en-US`)} source entities</small>
      </div>`).join(``);n(`#contract`).innerHTML=`
    <div class="coverage-list">
      ${r.map(([e,t])=>`<span><b>${G(e)}</b>${G(t)}</span>`).join(``)}
    </div>
    ${i}
  `}async function a(e){let t=await fetch(e,{cache:`no-store`});if(!t.ok)throw Error(`Could not load ${e}: ${t.status}`);return t.json()}function o(){n(`#drawingSearch`).addEventListener(`input`,t=>{e.drawingQuery=t.target.value.toLowerCase(),P()}),n(`#stageFilter`).addEventListener(`change`,t=>{e.stage=t.target.value;let n=N();n.some(t=>t.role===e.selectedRole)||(e.selectedRole=n[0]?.role||e.registry.drawings[0]?.role),P(),F()}),n(`#anchorSearch`).addEventListener(`input`,t=>{e.anchorQuery=t.target.value.toLowerCase(),U()})}function s(){return[`ground_floor_plan`,`site_plan`,`front_elevation`,`section_b`].find(t=>e.registry.drawings.some(e=>e.role===t))||e.registry.drawings[0]?.role}function c(){let t=e.audit,r=e.registry.source_policy;n(`#summary`).innerHTML=[l(`Audit`,t.status,t.status),l(`CAD Inserts`,`${r.exported_count}/${r.insert_count}`),l(`CAD Entities`,r.total_cad_entities.toLocaleString(`en-US`)),l(`Material Groups`,e.materialLevels.materials.length.toLocaleString(`en-US`)),l(`Label Anchors`,e.anchors.anchor_count.toLocaleString(`en-US`)),l(`Source Gate`,e.sourceReadiness.ready_for_shell_extraction?`Ready`:`Blocked`,e.sourceReadiness.ready_for_shell_extraction?`pass`:`fail`),l(`Final 3D Basis`,e.sourceBasing.status===`source_qa_pass_final_3d_blocked`?`Blocked`:`Review`,`warning`),l(`Semantic CAD`,`${e.semanticCadSources.sources.reduce((e,t)=>e+t.entity_count,0).toLocaleString(`en-US`)} entities`,`pass`),l(`Site Context`,`${e.validatedSiteContext.object_count} objects`,`warning`),l(`Object Worksets`,`${e.semanticObjectWorksets.sources.reduce((e,t)=>e+Object.values(t.workset_counts).reduce((e,t)=>e+t,0),0).toLocaleString(`en-US`)} candidates`,`warning`),l(`Joined Objects`,`${e.joinedObjectCandidates.object_count.toLocaleString(`en-US`)} candidates`,`warning`),l(`CAD Details`,`${e.cadDetailCatalog.entity_count.toLocaleString(`en-US`)} entities`,`pass`),l(`Enrichment`,`${e.detailEnrichment.family_count} families`,`warning`),l(`Enrichment QA`,`${e.detailEnrichmentQaBoards.board_count} boards`,`warning`),l(`Detail Components`,`${e.cadDetailComponents.component_count.toLocaleString(`en-US`)}`,`warning`),l(`Interchange`,e.interchangeManifest.status.replaceAll(`_`,` `),`warning`),l(`Level Constraints`,`${e.levelConstraints.building_level_marker_group_count} building / ${e.levelConstraints.site_terrain_level_marker_group_count} terrain`,`warning`),l(`Bound Levels`,`${e.boundLevelConstraints.bound_level_count} refs / ${e.boundLevelConstraints.material_slot_count} materials`,`warning`),l(`Wall Runs`,`${e.wallRunLevelJoin.wall_run_count} runs / ${e.wallRunLevelJoin.source_wall_segment_count} CAD pieces`,`warning`),l(`Opening Links`,`${e.openingWallRunDimensions.direct_source_overlap_wall_context_count}/${e.openingWallRunDimensions.binding_count} CAD-linked`,`warning`),l(`Facades`,`${e.facadeAlignment.facades.length} validated pairs`,`pass`)].join(``)}function l(e,t,n=``){return`<div class="metric ${G(n)}"><span>${G(e)}</span><strong>${G(t)}</strong></div>`}function u(){let t=e.currentValidationQueue,r=t.immediate_user_validation.map(e=>d(e,`needs-review`)).join(``),i=t.self_checked_no_user_blocker.map(e=>d(e,`self-checked`)).join(``),a=t.not_ready_for_user_validation_yet.map(e=>d(e,`blocked`)).join(``);n(`#currentValidationQueue`).innerHTML=`
    <div class="validation-queue-grid">
      <div>
        <h3>Needs Your Validation Now</h3>
        ${r||`<p>No user validation is waiting right now. The next blocking work is technical CAD/PDF binding by the agent.</p>`}
      </div>
      <div>
        <h3>Already Checked / No User Blocker</h3>
        ${i||`<p>No self-checked items.</p>`}
      </div>
      <div>
        <h3>Not Ready Yet</h3>
        ${a||`<p>No blocked future validation items.</p>`}
      </div>
    </div>
  `}function d(e,t){let n=(e.what_to_check||[]).slice(0,6).map(e=>`<li>${G(e)}</li>`).join(``),r=e.path||e.preselection_qa_board||e.preselection_path||``,i=r?`<a href="${K(r)}" target="_blank" rel="noreferrer">Open preview/source</a>`:``,a=e.browser_url?`<a href="${K(e.browser_url)}" target="_blank" rel="noreferrer">Open browser view</a>`:``,o=e.validation_effect||e.note||``;return`<article class="validation-card ${G(t)}">
    <div>
      <strong>${G(e.id)} ${G(e.title)}</strong>
      <small>${G(e.status)}</small>
    </div>
    ${o?`<p>${G(o)}</p>`:``}
    ${n?`<ul>${n}</ul>`:``}
    <div class="validation-links">${i}${a}</div>
  </article>`}function f(){let t=e.sourceBasing,r=t.source_boards.map(e=>`<div class="source-basing-card ${G(e.status)}">
        <strong>${G(e.id.replaceAll(`_`,` `))}</strong>
        <small>${G(e.status)}</small>
        <p>${G(e.preview_method)}</p>
      </div>`).join(``),i=t.model_generators.map(e=>`<div class="source-basing-card blocked">
        <strong>${G(e.id.replaceAll(`_`,` `))}</strong>
        <small>${G(e.status)}</small>
        <p>Allowed: ${G(e.allowed_use)}</p>
        <p>Blocked: ${G(e.blocked_use)}</p>
      </div>`).join(``),a=t.blocking_rules_before_final_3d.map(e=>`<li>${G(e)}</li>`).join(``),o=t.next_required_steps.map(e=>`<li>${G(e)}</li>`).join(``),s=(t.cad_loop_extraction?.sources||[]).map(e=>`<div class="source-basing-card pass">
        <strong>${G(e.id.replaceAll(`_`,` `))}</strong>
        <small>${e.loop_count.toLocaleString(`en-US`)} loops / ${e.segment_count.toLocaleString(`en-US`)} segments</small>
        <p>${G(e.source)}</p>
      </div>`).join(``),c=(t.cad_loop_classification?.sources||[]).map(e=>`<div class="source-basing-card pass">
        <strong>${G(e.id.replaceAll(`_`,` `))}</strong>
        <small>${e.item_count.toLocaleString(`en-US`)} classified items</small>
        <p>${G(e.status)}</p>
      </div>`).join(``);n(`#sourceBasing`).innerHTML=`
    <div class="gate-status warning">
      <span>Final 3D model basis</span>
      <strong>${G(t.status)}</strong>
    </div>
    <div class="source-basing-grid">
      <div>
        <h3>Real Source Boards</h3>
        ${r}
      </div>
      <div>
        <h3>Blocked Existing 3D Exports</h3>
        ${i}
      </div>
      <div>
        <h3>New CAD Loop Layer</h3>
        ${s||`<p>No loop extraction yet.</p>`}
      </div>
      <div>
        <h3>Loop Classification</h3>
        ${c||`<p>No classification yet.</p>`}
      </div>
      <div>
        <h3>Blocking Rules</h3>
        <ul>${a}</ul>
      </div>
      <div>
        <h3>Next Required Steps</h3>
        <ul>${o}</ul>
      </div>
    </div>
  `}function p(){let t=e.loopQaBoards.boards||[];n(`#loopQaBoards`).innerHTML=t.map(e=>`<article class="loop-qa-card">
        <div>
          <strong>${G(e.title)}</strong>
          <small>${G(e.status)} / ${G(e.overlay_geometry)}</small>
        </div>
        <a href="${K(e.image)}" target="_blank" rel="noreferrer">
          <img src="${K(e.image)}" alt="${K(e.title)}" loading="lazy" decoding="async" />
        </a>
        <p>${e.focused_item_count.toLocaleString(`en-US`)} focused classified CAD items.</p>
      </article>`).join(``)}function m(){let t=e.semanticCadSources.sources||[];n(`#semanticCadSources`).innerHTML=t.map(e=>{let t=Object.entries(e.role_counts).sort((e,t)=>t[1]-e[1]).slice(0,8).map(([e,t])=>`<li><code>${G(e)}</code><span>${t.toLocaleString(`en-US`)}</span></li>`).join(``);return`<article class="semantic-cad-card">
        <div>
          <strong>${G(e.id.replaceAll(`_`,` `))}</strong>
          <small>${G(e.stage)} / ${G(e.status)}</small>
        </div>
        <div class="gate-counts semantic-cad-counts">
          <span><b>Entities</b>${e.entity_count.toLocaleString(`en-US`)}</span>
          <span><b>Text labels</b>${e.text_item_count.toLocaleString(`en-US`)}</span>
        </div>
        <ul>${t}</ul>
        <a href="${K(e.json)}" target="_blank" rel="noreferrer">Open CAD source JSON</a>
      </article>`}).join(``)}function h(){let t=e.validatedSiteContext,r=Object.entries(t.lifecycle_counts).map(([e,t])=>`<li><code>${G(e)}</code><span>${t.toLocaleString(`en-US`)}</span></li>`).join(``),i=t.objects.map(e=>`<article class="validated-site-card">
        <strong>${G(e.label)}</strong>
        <small>${G(e.object_type)} / ${G(e.lifecycle)}</small>
        <p>${G(e.validation_status)}</p>
      </article>`).join(``),a=t.excluded_demolished_source_history.map(e=>`<li><code>${G(e.label)}</code><span>${G(e.lifecycle)}</span></li>`).join(``);n(`#validatedSiteContext`).innerHTML=`
    <div class="gate-status warning">
      <span>Site context status</span>
      <strong>${G(t.status)}</strong>
    </div>
    <div class="gate-counts">
      <span><b>Active objects</b>${t.object_count}</span>
      <span><b>Excluded demolished</b>${t.excluded_demolished_count}</span>
      <span><b>Mesh</b>blocked</span>
    </div>
    <div class="validated-site-layout">
      <div>
        <h3>Lifecycle Counts</h3>
        <ul>${r}</ul>
        <h3>Excluded Demolished</h3>
        <ul>${a}</ul>
      </div>
      <div class="validated-site-cards">${i}</div>
      <a class="validated-site-board" href="./assets/cad-truth/validated-site-context.png" target="_blank" rel="noreferrer">
        <img src="./assets/cad-truth/validated-site-context.png" alt="Validated site context QA board" loading="lazy" decoding="async" />
      </a>
    </div>
  `}function g(){let t=e.semanticObjectWorksets.sources||[];n(`#semanticObjectWorksets`).innerHTML=t.map(e=>{let t=Object.entries(e.workset_counts).sort((e,t)=>t[1]-e[1]).map(([e,t])=>`<li><code>${G(e)}</code><span>${t.toLocaleString(`en-US`)}</span></li>`).join(``),n=Object.entries(e.reference_counts).sort((e,t)=>t[1]-e[1]).slice(0,6).map(([e,t])=>`<li><code>${G(e)}</code><span>${t.toLocaleString(`en-US`)}</span></li>`).join(``);return`<article class="semantic-object-card">
        <div>
          <strong>${G(e.id.replaceAll(`_`,` `))}</strong>
          <small>${G(e.status)}</small>
        </div>
        <p class="semantic-warning">Mesh: ${G(e.mesh_generation_status)}</p>
        <h3>Worksets</h3>
        <ul>${t}</ul>
        <h3>Reference context</h3>
        <ul>${n}</ul>
        <a href="${K(e.json)}" target="_blank" rel="noreferrer">Open workset JSON</a>
      </article>`}).join(``)}function _(){let t=e.joinedObjectCandidates,r=Object.entries(t.family_counts).sort((e,t)=>t[1]-e[1]).map(([e,t])=>`<li><code>${G(e)}</code><span>${t.toLocaleString(`en-US`)}</span></li>`).join(``),i=Object.entries(t.stage_counts).sort((e,t)=>t[1]-e[1]).map(([e,t])=>`<li><code>${G(e)}</code><span>${t.toLocaleString(`en-US`)}</span></li>`).join(``),a=Object.entries(t.reference_counts).sort((e,t)=>t[1]-e[1]).map(([e,t])=>`<li><code>${G(e)}</code><span>${t.toLocaleString(`en-US`)}</span></li>`).join(``);n(`#joinedObjectCandidates`).innerHTML=`
    <div class="gate-status warning">
      <span>Joined object status</span>
      <strong>${G(t.status)}</strong>
    </div>
    <div class="gate-counts">
      <span><b>Objects</b>${t.object_count.toLocaleString(`en-US`)}</span>
      <span><b>References</b>${t.reference_count.toLocaleString(`en-US`)}</span>
      <span><b>Mesh</b>blocked</span>
    </div>
    <div class="joined-object-grid">
      <div><h3>Families</h3><ul>${r}</ul></div>
      <div><h3>Stages</h3><ul>${i}</ul></div>
      <div><h3>References Preserved</h3><ul>${a}</ul></div>
    </div>
  `}function v(){let t=e.cadDetailCatalog,r=Object.entries(t.stage_counts).sort((e,t)=>t[1]-e[1]).map(([e,t])=>`<li><code>${G(e)}</code><span>${t.toLocaleString(`en-US`)}</span></li>`).join(``),i=Object.entries(t.detail_role_totals).sort((e,t)=>t[1]-e[1]).slice(0,12).map(([e,t])=>`<li><code>${G(e)}</code><span>${t.toLocaleString(`en-US`)}</span></li>`).join(``);n(`#cadDetailCatalog`).innerHTML=`
    <div class="gate-status pass">
      <span>CAD detail status</span>
      <strong>${G(t.status)}</strong>
    </div>
    <div class="gate-counts">
      <span><b>Drawings</b>${t.source_count}/${t.expected_source_count}</span>
      <span><b>Entities</b>${t.entity_count.toLocaleString(`en-US`)}/${t.expected_entity_count.toLocaleString(`en-US`)}</span>
      <span><b>Text labels</b>${t.text_item_count.toLocaleString(`en-US`)}</span>
    </div>
    <div class="cad-detail-grid">
      <div><h3>Stages</h3><ul>${r}</ul></div>
      <div><h3>Top Detail Roles</h3><ul>${i}</ul></div>
    </div>
  `}function y(){let t=e.detailEnrichment,r=t.families.map(e=>`<article class="detail-enrichment-card">
        <strong>${G(e.object_family)}</strong>
        <small>${e.object_count.toLocaleString(`en-US`)} objects / ${e.matching_entity_count.toLocaleString(`en-US`)} matching CAD details / ${e.matching_source_count} drawings</small>
        <p>${G(e.status)}</p>
      </article>`).join(``);n(`#detailEnrichment`).innerHTML=`
    <div class="gate-status warning">
      <span>Detail enrichment status</span>
      <strong>${G(t.status)}</strong>
    </div>
    <div class="gate-counts">
      <span><b>Families</b>${t.family_count}</span>
      <span><b>Missing rules</b>${t.missing_rule_count}</span>
      <span><b>Mesh</b>blocked</span>
    </div>
    <div class="detail-enrichment-grid">${r}</div>
  `}function b(){let t=e.detailEnrichmentQaBoards,r=t.boards.map(e=>`<article class="detail-enrichment-qa-card">
        <a href="${K(e.image)}" target="_blank" rel="noreferrer">
          <img src="${K(e.image)}" alt="${K(e.title)}" loading="lazy" />
        </a>
        <strong>${G(e.object_family)}</strong>
        <small>${e.object_count.toLocaleString(`en-US`)} objects / ${e.matching_entity_count.toLocaleString(`en-US`)} CAD details / ${e.matching_source_count} drawings</small>
        <p>${G(e.qa_rule)}</p>
      </article>`).join(``);n(`#detailEnrichmentQaBoards`).innerHTML=`
    <div class="gate-status warning">
      <span>Detail QA status</span>
      <strong>${G(t.status)}</strong>
    </div>
    <div class="gate-counts">
      <span><b>Boards</b>${t.board_count}</span>
      <span><b>Mode</b>source pool</span>
      <span><b>Mesh</b>blocked</span>
    </div>
    <div class="detail-enrichment-qa-cards">${r}</div>
  `}function x(){let t=e.cadDetailComponents,r=Object.entries(t.component_role_totals).sort((e,t)=>t[1]-e[1]).slice(0,12).map(([e,t])=>`<li><code>${G(e)}</code><span>${t.toLocaleString(`en-US`)}</span></li>`).join(``),i=t.sources.filter(e=>e.component_count>100).sort((e,t)=>t.component_count-e.component_count).map(e=>`<li>
        <code>${G(e.semantic_title)}</code>
        <span>${e.component_count.toLocaleString(`en-US`)} comps / ${e.assigned_entity_count.toLocaleString(`en-US`)} entities</span>
      </li>`).join(``);n(`#cadDetailComponents`).innerHTML=`
    <div class="gate-status warning">
      <span>Component status</span>
      <strong>${G(t.status)}</strong>
    </div>
    <div class="gate-counts">
      <span><b>Drawings</b>${t.source_count}/${t.expected_source_count}</span>
      <span><b>Assigned entities</b>${t.assigned_entity_count.toLocaleString(`en-US`)}/${t.entity_count.toLocaleString(`en-US`)}</span>
      <span><b>Components</b>${t.component_count.toLocaleString(`en-US`)}</span>
      <span><b>Tolerance</b>${t.connect_tolerance_m} m</span>
    </div>
    <div class="cad-detail-components-grid">
      <div><h3>Top Component Roles</h3><ul>${r}</ul></div>
      <div><h3>Largest Source Drawings</h3><ul>${i}</ul></div>
    </div>
  `}function S(){let t=e.interchangeManifest,r=t.allowed_intermediate_exports.map(e=>`<div class="interchange-export">
        <strong>${G(e.format)}</strong>
        <small>${G(e.status)}</small>
        <p>${G(e.use)}</p>
      </div>`).join(``),i=t.forbidden_as_master.map(e=>`<li>${G(e)}</li>`).join(``);n(`#interchangeManifest`).innerHTML=`
    <div class="gate-status warning">
      <span>Interchange status</span>
      <strong>${G(t.status)}</strong>
    </div>
    <div class="gate-counts">
      <span><b>CAD entities</b>${t.active_source_counts.semantic_cad_entities.toLocaleString(`en-US`)}</span>
      <span><b>Workset candidates</b>${t.active_source_counts.semantic_workset_candidates.toLocaleString(`en-US`)}</span>
      <span><b>CAD source</b>${G(t.active_source_counts.cad_source_status)}</span>
    </div>
    <div class="interchange-grid">
      <div>
        <h3>Allowed Later Exports</h3>
        ${r}
      </div>
      <div>
        <h3>Forbidden As Master</h3>
        <ul>${i}</ul>
      </div>
      <div>
        <h3>Next Pipeline Step</h3>
        <p>${G(t.next_pipeline_step.description)}</p>
        <small>${G(t.next_pipeline_step.mesh_generation)}</small>
      </div>
    </div>
  `}function C(){let t=e.promotionReadiness,r=t.items.map(e=>`<article class="promotion-card ${e.mesh_permission===`preview_only`?`preview`:`blocked`}">
        <div>
          <strong>${G(e.item_id)} ${G(e.label)}</strong>
          <small>${G(e.promotion_status)}</small>
        </div>
        <span>${G(e.mesh_permission)}</span>
        <p>${G(e.allowed_next_action)}</p>
      </article>`).join(``);n(`#promotionReadiness`).innerHTML=`
    <div class="gate-status warning">
      <span>3D promotion gate</span>
      <strong>${G(t.status)}</strong>
    </div>
    <div class="gate-counts">
      <span><b>Preview allowed</b>${t.preview_allowed_item_count}</span>
      <span><b>Final blocked</b>${t.blocked_final_mesh_item_count}</span>
      <span><b>Final ready</b>${t.final_mesh_ready_item_count}</span>
      <span><b>Walkthrough ready</b>${t.walkthrough_ready_item_count}</span>
    </div>
    <div class="promotion-grid">${r}</div>
  `}function w(){let t=e.facadeAlignment.facades.map(e=>`<article class="facade-alignment-card">
        <strong>${G(e.semantic_title)}</strong>
        <small>semantic: ${G(e.semantic_role)} / source: ${G(e.source_role)} / insert ${e.insert_index}</small>
        <div class="facade-alignment-links">
          <a href="${K(e.pdf_reference_crop)}" target="_blank" rel="noreferrer">PDF crop</a>
          <a href="${K(e.cad_preview)}" target="_blank" rel="noreferrer">CAD truth</a>
        </div>
      </article>`).join(``);n(`#facadeAlignment`).innerHTML=t}function T(){let t=e.levelConstraints,r=t.user_validation||{},i=t.building_or_roof_level_marker_groups.filter(e=>e.confidence===`multi_source_candidate`||e.source_count>=2||e.candidate_level_m>=1).slice(0,12).map(e=>`<li>
        <code>${G(e.level_key_m)} m</code>
        <span>${e.source_count} CAD refs / ${G(e.confidence)}</span>
        <small>${G(e.semantic_titles.join(`, `))}</small>
      </li>`).join(``),a=t.material_text_evidence_groups.slice(0,10).map(e=>`<li>
        <code>${G(e.keyword)}</code>
        <span>${e.source_count} CAD refs</span>
        <small>${G(e.semantic_titles.join(`, `))}</small>
      </li>`).join(``),o=t.readiness_gates.map(e=>`<div class="level-gate ${G(e.status)}">
        <strong>${G(e.id)} ${G(e.title)}</strong>
        <small>${G(e.status)}</small>
        <p>${G(e.reason)}</p>
      </div>`).join(``);n(`#levelConstraints`).innerHTML=`
    <div class="gate-status warning">
      <span>Level/material constraint status</span>
      <strong>${G(t.status)}</strong>
    </div>
    <div class="gate-counts">
      <span><b>Materials</b>${G(r.materials_status||`pending`)}</span>
      <span><b>Level CAD refs</b>${G(r.level_source_ids_status||`pending`)}</span>
      <span><b>Mesh</b>${G(r.mesh_status||`blocked`)}</span>
    </div>
    <div class="gate-counts">
      <span><b>CAD text scanned</b>${t.text_entity_count_scanned.toLocaleString(`en-US`)}</span>
      <span><b>Building levels</b>${t.building_level_marker_group_count}</span>
      <span><b>Terrain peilen</b>${t.site_terrain_level_marker_group_count}</span>
      <span><b>Material groups</b>${t.material_evidence_group_count}</span>
    </div>
    <div class="level-constraints-grid">
      <div>
        <h3>Candidate Building / Roof Levels</h3>
        <ul>${i}</ul>
      </div>
      <div>
        <h3>Visible Material Evidence</h3>
        <ul>${a}</ul>
      </div>
      <div>
        <h3>Readiness Gates</h3>
        ${o}
      </div>
    </div>
  `}function E(){let t=e.boundLevelConstraints,r=t.user_validation_state||{},i=t.bound_levels.map(e=>`<li>
        <code>${G(e.id)}</code>
        <span>${Number(e.bound_value_m).toFixed(2)} m / ${G(e.confidence)}</span>
        <small>${G(e.label)}; refs: ${G((e.source?.source_entity_ids||[]).slice(0,5).join(`, `))}</small>
      </li>`).join(``),a=t.deferred_building_or_roof_levels.filter(e=>e.status===`candidate_preserved_for_later_section_or_roof_join`||[`2.72`,`3.43`,`2.30`].includes(e.source_level_key_m)).slice(0,8).map(e=>`<li>
        <code>${G(e.source_level_key_m)} m</code>
        <span>${G(e.status)}</span>
        <small>${G(e.reason)}</small>
      </li>`).join(``),o=t.validated_material_slots.map(e=>`<li>
        <code>${G(e.id)}</code>
        <span>${e.source_count} CAD refs</span>
        <small>${G(e.label)}; slots: ${G(e.target_slots.join(`, `))}</small>
      </li>`).join(``),s=t.readiness_gates.map(e=>`<div class="level-gate ${G(e.status)}">
        <strong>${G(e.id)} ${G(e.title)}</strong>
        <small>${G(e.status)}</small>
        <p>${G(e.reason)}</p>
      </div>`).join(``);n(`#boundLevelConstraints`).innerHTML=`
    <div class="gate-status warning">
      <span>Bound level/material contract status</span>
      <strong>${G(t.status)}</strong>
    </div>
    <div class="gate-counts">
      <span><b>Shell scope</b>${G(r.ground_floor_plan_shell_scope||`pending`)}</span>
      <span><b>Materials</b>${G(r.material_evidence||`pending`)}</span>
      <span><b>CAD level ids</b>${G(r.raw_cad_level_ids||`technical`)}</span>
    </div>
    <div class="gate-counts">
      <span><b>Bound refs</b>${t.bound_level_count}</span>
      <span><b>Deferred refs</b>${t.deferred_building_level_count}</span>
      <span><b>Terrain peilen</b>${t.site_terrain_metadata_count}</span>
      <span><b>Material slots</b>${t.material_slot_count}</span>
    </div>
    <div class="level-constraints-grid">
      <div>
        <h3>Bound Reference Levels</h3>
        <ul>${i}</ul>
      </div>
      <div>
        <h3>Deferred, Preserved</h3>
        <ul>${a||`<li><code>none</code><span>No highlighted deferred refs.</span></li>`}</ul>
      </div>
      <div>
        <h3>Material Slots And Gates</h3>
        <ul>${o}</ul>
        ${s}
      </div>
    </div>
  `}function D(){let t=e.wallRunLevelJoin,r=t.wall_runs.slice(0,16).map(e=>`<li>
        <code>${G(e.run_id)}</code>
        <span>${e.member_wall_segment_count} CAD pieces / ${e.source_entity_count} refs</span>
        <small>${G(e.orientation)}; ${G(e.mesh_status)}</small>
      </li>`).join(``),i=t.readiness_gates.map(e=>`<div class="level-gate ${G(e.status)}">
        <strong>${G(e.id)} ${G(e.title)}</strong>
        <small>${G(e.status)}</small>
        <p>${G(e.reason)}</p>
      </div>`).join(``),a=t.level_refs_joined.map(e=>`<li>
        <code>${G(e.level_id)}</code>
        <span>${Number(e.value_m).toFixed(2)} m</span>
        <small>${G(e.role)}; ${e.source_entity_ids.length} CAD refs</small>
      </li>`).join(``);n(`#wallRunLevelJoin`).innerHTML=`
    <div class="gate-status warning">
      <span>Wall-run/level join status</span>
      <strong>${G(t.status)}</strong>
    </div>
    <div class="gate-counts">
      <span><b>CAD wall pieces</b>${t.source_wall_segment_count}</span>
      <span><b>Wall runs</b>${t.wall_run_count}</span>
      <span><b>Structural refs</b>${t.structure_preserved.source_entity_count}</span>
      <span><b>Mesh</b>blocked</span>
    </div>
    <div class="level-constraints-grid">
      <div>
        <h3>Joined Level Refs</h3>
        <ul>${a}</ul>
      </div>
      <div>
        <h3>Sample Wall Runs</h3>
        <ul>${r}</ul>
      </div>
      <div>
        <h3>Readiness Gates</h3>
        ${i}
      </div>
    </div>
  `}function O(){let t=e.openingWallRunDimensions,r=t.bindings.map(e=>`<li>
        <code>${G(e.legend_id)}</code>
        <span>${G(e.opening_display_label)} -> ${G(e.accepted_wall_run_ids.join(`, `)||`review`)}</span>
        <small>${G(e.facade)}; ${e.exact_dimension_bound_slot_count}/${e.dimension_slot_count} exact dimension slots bound; ${G(e.mesh_status)}</small>
      </li>`).join(``),i=t.readiness_gates.map(e=>`<div class="level-gate ${G(e.status)}">
        <strong>${G(e.id)} ${G(e.title)}</strong>
        <small>${G(e.status)}</small>
        <p>${G(e.reason)}</p>
      </div>`).join(``),a=Object.entries(t.status_counts).map(([e,t])=>`<li><code>${G(e)}</code><span>${t}</span></li>`).join(``);n(`#openingWallRunDimensions`).innerHTML=`
    <div class="gate-status warning">
      <span>Opening/wall-run dimension status</span>
      <strong>${G(t.status)}</strong>
    </div>
    <div class="gate-counts">
      <span><b>Facade openings</b>${t.binding_count}</span>
      <span><b>Direct CAD wall links</b>${t.direct_source_overlap_wall_context_count}</span>
      <span><b>Exact dimensions</b>${t.exact_dimension_bound_slot_count}/${t.dimension_slot_count}</span>
      <span><b>Mesh</b>blocked</span>
    </div>
    <div class="level-constraints-grid">
      <div>
        <h3>Opening Wall-Run Links</h3>
        <ul>${r}</ul>
      </div>
      <div>
        <h3>Status Counts</h3>
        <ul>${a}</ul>
      </div>
      <div>
        <h3>Readiness Gates</h3>
        ${i}
      </div>
    </div>
  `}function k(){let t=e.opening3dPreparation,r=t.objects.map(e=>`<li>
        <code>${G(e.legend_id)}</code>
        <span>${G(e.opening_display_label)}</span>
        <small>${e.candidate_visible_3d_entity_count} CAD opening candidates (${e.candidate_visible_3d_entity_with_points_count} with points); ${e.preserve_wall_or_structural_entity_count} wall/structural preserved; ${G(e.mesh_status)}</small>
      </li>`).join(``),i=t.rules.map(e=>`<li>${G(e)}</li>`).join(``);n(`#opening3dPreparation`).innerHTML=`
    <div class="gate-status warning">
      <span>Opening 3D preparation status</span>
      <strong>${G(t.status)}</strong>
    </div>
    <div class="gate-counts">
      <span><b>Opening objects</b>${t.opening_count}</span>
      <span><b>Candidate CAD entities</b>${t.candidate_visible_3d_entity_count}</span>
      <span><b>With source points</b>${t.candidate_visible_3d_entity_with_points_count}</span>
      <span><b>Preserved wall/structure</b>${t.preserve_wall_or_structural_entity_count}</span>
      <span><b>Exact dimensions</b>${t.exact_metric_dimension_bound_slot_count}</span>
    </div>
    <div class="level-constraints-grid">
      <div>
        <h3>Opening Objects</h3>
        <ul>${r}</ul>
      </div>
      <div>
        <h3>Rules</h3>
        <ul>${i}</ul>
      </div>
    </div>
  `}function A(){let t=e.openingInspectorPayload,r=Object.fromEntries((e.openingCutContract?.objects||[]).map(e=>[e.legend_id,e])),i=Object.fromEntries((e.openingCoordinateMeasurements?.objects||[]).map(e=>[e.legend_id,e])),a=Object.fromEntries((e.openingWidthReconciliation?.objects||[]).map(e=>[e.legend_id,e])),o=Object.fromEntries((e.openingCutlineNarrowing?.objects||[]).map(e=>[e.legend_id,e])),s=Object.fromEntries((e.openingWidthNarrowedCandidates?.objects||[]).map(e=>[e.legend_id,e])),c=Object.fromEntries((e.openingVerticalDerivationCandidates?.objects||[]).map(e=>[e.legend_id,e])),l=Object.fromEntries((e.openingCandidateReadinessMatrix?.objects||[]).map(e=>[e.legend_id,e])),u=Object.fromEntries((e.openingMetricCandidatePackets?.objects||[]).map(e=>[e.legend_id,e])),d=Object.fromEntries((e.openingVerticalSlotCandidateSelector?.objects||[]).map(e=>[e.legend_id,e])),f=Object.fromEntries((e.openingMeshBlockerMatrix?.objects||[]).map(e=>[e.legend_id,e])),p=Object.fromEntries((e.openingBoundMetricDimensionDraft?.objects||[]).map(e=>[e.legend_id,e])),m=t.objects||[],h=m.filter(e=>e.p1_status===`p1_ready`).length,g=m.filter(e=>e.width?.best_proposal).length,_=m.reduce((e,t)=>e+(t.vertical?.missing_slots||[]).length,0),v=m.map(e=>{let t=e.width?.best_proposal,n=t?`${j(t.plan_width_extent_m)} plan / ${j(t.cad_text_value_m)} text`:`not bound`,m=e.width?.safety_status?.includes(`safe`)?`candidate`:`blocked`,h=e.vertical?.missing_slots||[],g=e.vertical?.detail_evidence||[],_=r[e.legend_id],v=i[e.legend_id],y=v?.candidate_coordinate_width_m,b=v?.quality_flags||[],x=a[e.legend_id],S=o[e.legend_id],C=S?.best_candidate;s[e.legend_id];let w=c[e.legend_id],T=l[e.legend_id],E=u[e.legend_id],D=d[e.legend_id],O=D?.top_ranked_pairs?.[0],k=f[e.legend_id]?.width_candidate,A=p[e.legend_id],M=(e.linked_cad_text_labels||[]).map(e=>e.normalized_text).filter(Boolean),N=e.width?.risk_flags||[];return`<article class="opening-inspector-card">
        <header>
          <span class="opening-id">${G(e.legend_id)}</span>
          <div>
            <strong>${G(e.display_label)}</strong>
            <small>${G(e.opening_type)}</small>
          </div>
        </header>
        <dl>
          <div>
            <dt>CAD refs</dt>
            <dd>${Number(e.source_entity_count||0).toLocaleString(`en-US`)}</dd>
          </div>
          <div>
            <dt>Width</dt>
            <dd><span class="opening-pill ${m}">${G(n)}</span></dd>
          </div>
          <div>
            <dt>Missing cut slots</dt>
            <dd>${h.length?G(h.join(`, `)):`none listed`}</dd>
          </div>
          <div>
            <dt>Detail evidence</dt>
            <dd>${g.length.toLocaleString(`en-US`)} CAD/context labels</dd>
          </div>
          <div>
            <dt>Visual detail refs</dt>
            <dd>${Number(_?.visual_opening_detail_sources?.source_entity_count||0).toLocaleString(`en-US`)}</dd>
          </div>
          <div>
            <dt>Wall refs preserved</dt>
            <dd>${Number(_?.wall_or_structure_sources_to_preserve?.source_entity_count||0).toLocaleString(`en-US`)}</dd>
          </div>
          <div>
            <dt>Cutline candidates</dt>
            <dd>${Number(_?.plan_cutline_candidate_sources?.source_entity_count||0).toLocaleString(`en-US`)}</dd>
          </div>
          <div>
            <dt>CAD coordinate span</dt>
            <dd>${typeof y==`number`?`${y.toFixed(3)} m`:`not measured`}${b.length?` / ${G(b.join(`, `))}`:``}</dd>
          </div>
          <div>
            <dt>Width reconciliation</dt>
            <dd><span class="opening-pill blocked">${G(x?.status||`not available`)}</span></dd>
          </div>
          <div>
            <dt>Narrowed CAD span</dt>
            <dd>${C?`${Number(C.coordinate_span_m).toFixed(3)} m / ${G(S.status)}`:`not available`}</dd>
          </div>
          <div>
            <dt>Safety width candidate</dt>
            <dd>${typeof k?.value_m==`number`?`${Number(k.value_m).toFixed(3)} m`:`blocked`} / ${G(k?.safety_status||k?.status||`not available`)}</dd>
          </div>
          <div>
            <dt>Vertical derived slots</dt>
            <dd>${Number(w?.derived_candidate_count||0).toLocaleString(`en-US`)} / ${G(w?.status||`not available`)}</dd>
          </div>
          <div>
            <dt>Candidate readiness</dt>
            <dd>${G(T?.status||`not available`)}</dd>
          </div>
          <div>
            <dt>Metric packet</dt>
            <dd>${G(E?.packet_status||`not available`)}</dd>
          </div>
          <div>
            <dt>Bound metric draft</dt>
            <dd>${A?`${Number(A.candidate_bound_slot_count||0).toLocaleString(`en-US`)} candidate slots / ${G(A.draft_status)}`:`not available`}</dd>
          </div>
          <div>
            <dt>Vertical selector</dt>
            <dd>${D?`${Number(D.ranked_pair_count||0).toLocaleString(`en-US`)} CAD pairs / ${G(D.binding_status)}`:`not available`}</dd>
          </div>
          <div>
            <dt>Top vertical pair</dt>
            <dd>${O?`${Number(O.derived_opening_height_m).toFixed(3)} m from ${G(O.threshold_or_sill.source_entity_id)} + ${G(O.header_or_lintel.source_entity_id)}`:`not available`}</dd>
          </div>
          <div>
            <dt>P1 status</dt>
            <dd><span class="opening-pill blocked">${G(e.p1_status||`blocked`)}</span></dd>
          </div>
          <div>
            <dt>Popup labels</dt>
            <dd>${M.length?G(M.join(`, `)):`no linked CAD text label`}</dd>
          </div>
        </dl>
        ${N.length?`<p class="opening-risk">${G(N.join(`; `))}</p>`:``}
      </article>`}).join(``);n(`#openingInspectorPayload`).innerHTML=`
    <div class="gate-status warning">
      <span>Opening inspector status</span>
      <strong>${G(t.status)}</strong>
    </div>
    <div class="gate-counts">
      <span><b>Openings</b>${m.length.toLocaleString(`en-US`)}</span>
      <span><b>P1 ready</b>${h.toLocaleString(`en-US`)}</span>
      <span><b>Width candidates</b>${g.toLocaleString(`en-US`)}</span>
      <span><b>Missing cut slots</b>${_.toLocaleString(`en-US`)}</span>
      <span><b>Cut mesh ready</b>${Number(e.openingCutContract?.mesh_ready_opening_count||0).toLocaleString(`en-US`)}</span>
      <span><b>Clear coord candidates</b>${Number(e.openingCoordinateMeasurements?.clear_coordinate_candidate_count||0).toLocaleString(`en-US`)}</span>
      <span><b>Width reconciled</b>${Number(e.openingWidthReconciliation?.clear_reconciliation_count||0).toLocaleString(`en-US`)}</span>
      <span><b>Narrow close matches</b>${(e.openingCutlineNarrowing?.objects||[]).filter(e=>e.status===`close_coordinate_text_narrowing_candidate_not_mesh`).length.toLocaleString(`en-US`)}</span>
      <span><b>Safety width inputs</b>${Number(e.openingCandidateReadinessMatrix?.objects_with_width_candidate||0).toLocaleString(`en-US`)}</span>
      <span><b>Vertical derived</b>${Number(e.openingVerticalDerivationCandidates?.derived_candidate_count||0).toLocaleString(`en-US`)}</span>
      <span><b>Width-ready inputs</b>${Number(e.openingCandidateReadinessMatrix?.objects_with_width_candidate||0).toLocaleString(`en-US`)}</span>
      <span><b>Vertical-ready inputs</b>${Number(e.openingCandidateReadinessMatrix?.objects_with_vertical_candidate||0).toLocaleString(`en-US`)}</span>
      <span><b>Metric packets</b>${Number(e.openingMetricCandidatePackets?.complete_candidate_packet_count||0).toLocaleString(`en-US`)}</span>
      <span><b>Vertical selectors</b>${Number(e.openingVerticalSlotCandidateSelector?.candidate_selector_count||0).toLocaleString(`en-US`)}</span>
      <span><b>Bound metric draft</b>${Number(e.openingBoundMetricDimensionDraft?.candidate_bound_slot_count||0).toLocaleString(`en-US`)}</span>
    </div>
    <div class="opening-inspector-grid">${v}</div>
  `}function j(e){return typeof e!=`number`||!Number.isFinite(e)?`not bound`:`${e.toFixed(2)} m`}function M(){let t=Array.from(new Set(e.registry.drawings.map(e=>e.stage))).sort();n(`#stageFilter`).innerHTML=`<option value="all">All stages</option>${t.map(e=>`<option value="${G(e)}">${G(e.replaceAll(`_`,` `))}</option>`).join(``)}`}function N(){return e.registry.drawings.filter(t=>{let n=`${t.role} ${t.stage} ${t.block_name} ${t.insert_index}`.toLowerCase();return(e.stage===`all`||t.stage===e.stage)&&(!e.drawingQuery||n.includes(e.drawingQuery))})}function P(){let t=N();n(`#drawings`).innerHTML=t.map(t=>{let n=t.role===e.selectedRole?` active`:``,r=t.pdf_reference_crops.length?`${t.pdf_reference_crops.length} PDF ref`:`CAD only`,i=t.semantic_title||t.role.replaceAll(`_`,` `),a=t.source_role&&t.source_role!==t.semantic_role?`source: ${t.source_role}`:`source: ${t.role}`;return`<button class="drawing-button${n}" data-role="${G(t.role)}">
        <strong>${G(i)}</strong>
        <small>${G(a)} / insert ${t.insert_index} / ${G(t.block_name)}</small>
        <small>${G(t.stage.replaceAll(`_`,` `))}</small>
        <small>${t.entity_count.toLocaleString(`en-US`)} entities / ${r}</small>
      </button>`}).join(``),document.querySelectorAll(`.drawing-button`).forEach(t=>{t.addEventListener(`click`,()=>{e.selectedRole=t.dataset.role,P(),F()})})}function F(){let t=e.registry.drawings.find(t=>t.role===e.selectedRole)||e.registry.drawings[0],r=e.audit.drawings.find(e=>e.role===t.role),i=e.cadIndex.layers.find(e=>e.role===t.role),a=t.pdf_reference_crops[0],o=t.pdf_reference_crops.length?t.pdf_reference_crops.map((e,t)=>L(`PDF reference ${t+1}`,e,e,``,R(e))).join(``):L(`PDF reference`,``,``,`No specific PDF crop linked yet`),s=L(`CAD technical preview`,t.cad_preview,t.cad_preview);n(`#drawingDetail`).innerHTML=`
    <div class="detail-head">
      <div>
        <h2>${G(t.semantic_title||t.role.replaceAll(`_`,` `))}</h2>
        <p>
          Source role <code>${G(t.source_role||t.role)}</code>,
          semantic role <code>${G(t.semantic_role||t.role)}</code>.
          Insert ${t.insert_index}, block <code>${G(t.block_name)}</code>.
          ${t.entity_count.toLocaleString(`en-US`)} preserved CAD entities.
        </p>
        ${I(t)}
      </div>
      <span class="status-pill">${G(r?.status||`unknown`)}</span>
    </div>
    <div class="detail-links">
      <a href="${K(t.cad_truth_json)}" target="_blank" rel="noreferrer">CAD truth JSON</a>
      <a href="${K(t.cad_preview)}" target="_blank" rel="noreferrer">CAD preview</a>
      ${a?`<a href="${K(a)}" target="_blank" rel="noreferrer">PDF reference</a>`:``}
    </div>
    <div class="media-grid">${o}${s}</div>
    <h3>Layer Summary</h3>
    ${z(i?.layer_summary||{})}
  `}function I(e){let t=e.semantic_qa_flags||[],n=e.semantic_confidence||`unknown`;return!t.length&&n!==`needs_manual_pdf_match`?`<p class="semantic-ok">Semantic match: ${G(n)}</p>`:`<p class="semantic-warning">Semantic QA: ${G(t.length?t.join(`, `):n)}. Do not use this drawing for final 3D until reviewed.</p>`}function L(e,t,n,r=``,i=null){if(!t)return`<div class="media-box"><h3>${G(e)}</h3><p style="padding:10px">${G(r)}</p></div>`;let a=i?`<p class="crop-status ${G(i.status)}">${G(i.status)}${i.status===`validated`?``:` - do not use for final 3D decisions`}</p>`:``;return`<div class="media-box">
    <h3>${G(e)}</h3>
    ${a}
    <a href="${K(n)}" target="_blank" rel="noreferrer">
      <img src="${K(t)}" alt="${K(e)}" loading="eager" decoding="async" />
    </a>
  </div>`}function R(t){let n=t.replaceAll(`\\`,`/`);return e.cropManifest?.crops?.find(e=>e.image===n||e.preview===n||n.endsWith(`/crops/${e.slug}.png`))||null}function z(e){return`<table class="layer-table"><thead><tr><th>Layer</th><th>Entities</th><th>Types</th></tr></thead><tbody>${Object.entries(e).sort((e,t)=>t[1].entities-e[1].entities).map(([e,t])=>{let n=Object.entries(t).filter(([e])=>e!==`entities`).map(([e,t])=>`${e}: ${t}`).join(`, `);return`<tr><td>${G(e)}</td><td>${t.entities}</td><td>${G(n)}</td></tr>`}).join(``)}</tbody></table>`}function B(){n(`#families`).innerHTML=e.families.families.map(e=>`<div class="family-item">
        <strong>${G(e.label)}</strong>
        <small>${G(e.id)} / ${e.material_slots.map(e=>G(e)).join(`, `)}</small>
      </div>`).join(``)}function V(){let t=e.materialLevels.materials.map(e=>H(e.id,e.status,e.evidence[0]?.text||`No evidence`)).join(``),r=e.materialLevels.levels.map(e=>H(e.id,e.status,e.evidence[0]?.text||`No evidence`)).join(``);n(`#materials`).innerHTML=`${t}${r}`}function H(e,t,n){return`<div class="evidence-item"><strong>${G(e.replaceAll(`_`,` `))}</strong><small>${G(t)}</small><p>${G(n)}</p></div>`}function U(){let t=e.anchors.anchors.filter(t=>{let n=`${t.kind} ${t.role} ${t.text}`.toLowerCase();return!e.anchorQuery||n.includes(e.anchorQuery)});n(`#anchors`).innerHTML=t.slice(0,180).map(e=>{let t=e.cad_insert?`${e.cad_insert[0].toFixed(1)}, ${e.cad_insert[1].toFixed(1)}`:`no position`;return`<div class="anchor-item"><strong>${G(e.text)}</strong><small>${G(e.kind)} / ${G(e.role)} / ${t}</small></div>`}).join(``)}function ee(){let t=e.cropManifest?.crops||[],r={blocked_mixed_context:0,needs_user_validation:1,validated:2};n(`#cropValidation`).innerHTML=t.slice().sort((e,t)=>(r[e.status]??9)-(r[t.status]??9)||e.slug.localeCompare(t.slug)).map(e=>{let t=e.pdf_box.map(e=>Number(e).toFixed(0)).join(`, `),n=e.status===`validated`?`May be used as PDF evidence.`:e.status===`blocked_mixed_context`?`Blocked: crop mixes drawing context and must be redrawn.`:`Needs visual validation against the full PDF sheet.`;return`<article class="crop-card ${G(e.status)}">
        <div>
          <strong>${G(e.title)}</strong>
          <small>${G(e.slug)}</small>
        </div>
        <p class="crop-status ${G(e.status)}">${G(e.status)}</p>
        <p>${G(n)}</p>
        ${e.review_note?`<p class="review-note">${G(e.review_note)}</p>`:``}
        ${e.self_check?`<p class="self-check-note">${G(e.self_check)}</p>`:``}
        <dl>
          <dt>PDF box</dt><dd>${G(t)}</dd>
          <dt>Pixels</dt><dd>${G(e.pixel_size.join(` x `))}</dd>
        </dl>
        <div class="crop-links">
          <a href="${K(e.image)}" target="_blank" rel="noreferrer">Open crop</a>
          <a href="./assets/pdf-reference/uitvplan-4-page-1-coordinate-overlay.png" target="_blank" rel="noreferrer">Overlay</a>
        </div>
      </article>`}).join(``)}function W(){let t=e.sourceReadiness,r=t.pdf_crop_status_counts||{},i=t.nonblocking_open_items?.length?t.nonblocking_open_items.map(e=>`<li><code>${G(e.slug)}</code>: ${G(e.reason)}</li>`).join(``):`<li>None</li>`,a=t.deferred_decisions?.length?t.deferred_decisions.map(e=>`<li>
            <strong>${G(e.id.replaceAll(`_`,` `))}</strong>
            <span>${G(e.reason)}</span>
            <small>${G(e.allowed_now)} ${G(e.blocked_now)}</small>
          </li>`).join(``):`<li>None</li>`;n(`#sourceGate`).innerHTML=`
    <div class="gate-status ${t.ready_for_shell_extraction?`pass`:`fail`}">
      <span>${t.ready_for_shell_extraction?`Ready for shell extraction`:`Blocked before shell extraction`}</span>
      <strong>${G(t.status)}</strong>
    </div>
    <div class="gate-counts">
      <span><b>Validated crops</b>${G(r.validated||0)}</span>
      <span><b>Blocked/deprecated</b>${G(r.blocked_mixed_context||0)}</span>
      <span><b>Needs validation</b>${G(r.needs_user_validation||0)}</span>
    </div>
    <div class="gate-columns">
      <div>
        <h3>Nonblocking Open Items</h3>
        <ul>${i}</ul>
      </div>
      <div>
        <h3>Deferred Decisions</h3>
        <ul>${a}</ul>
      </div>
    </div>
  `}function G(e){return String(e??``).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#039;`)}function K(e){return G(e).replaceAll(`\\`,`/`)}