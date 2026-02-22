<script setup lang="ts">
  import { Icon } from '@iconify/vue'

  interface FeatureItem {
    title: string
    description: string
    icon: string
  }

  interface CommandExample {
    label: string
    command: string
    icon: string
  }

  const FeatureItems: FeatureItem[] = [
    {
      title: 'One Workflow Across Ecosystems',
      description:
        'Use a single package lifecycle while Opk orchestrates npm, Bun, pnpm, Yarn, and Deno behind the scenes.',
      icon: 'solar:layers-minimalistic-line-duotone',
    },
    {
      title: 'Deterministic Install Strategy',
      description:
        'Keep environments reproducible with synchronized configuration and generation from a typed source of truth.',
      icon: 'solar:shield-check-line-duotone',
    },
    {
      title: 'Type-Safe Package Control',
      description:
        'Drive dependency and script management from package.ts with strong static guarantees and clean ergonomics.',
      icon: 'solar:code-square-line-duotone',
    },
  ]

  const CommandExamples: CommandExample[] = [
    {
      label: 'Add dependencies with sync + generate',
      command: 'opk add vue vite @vitejs/plugin-vue',
      icon: 'solar:add-circle-line-duotone',
    },
    {
      label: 'Run scripts with your configured manager',
      command: 'opk run dev',
      icon: 'solar:play-circle-line-duotone',
    },
    {
      label: 'Execute local binaries with Opk',
      command: 'opx vite build',
      icon: 'solar:widget-line-duotone',
    },
    {
      label: 'Scaffold a typed package config',
      command: 'opk init',
      icon: 'solar:document-add-line-duotone',
    },
    {
      label: 'Sync package.ts and generate package.json',
      command: 'opk sync',
      icon: 'solar:refresh-circle-line-duotone',
    },
  ]
</script>

<template>
  <div class="landingPage">
    <header class="topNav">
      <div class="topNavInner">
        <a href="#" class="brandMark">
          <img
            src="/images/opk-icon.png"
            alt="Opk icon"
            class="brandIconImage"
          />
          <span>Opk</span>
        </a>

        <nav class="navLinks">
          <a href="#features">Why Opk</a>
          <a href="#commands">Commands</a>
          <a href="#about">About</a>
          <a href="#install">Install</a>
        </nav>

        <div class="navActionRow">
          <a
            href="https://www.npmjs.com/package/opk-pm"
            target="_blank"
            rel="noreferrer"
            class="primaryAction navAction"
          >
            <Icon icon="solar:info-circle-line-duotone" />
            NPM
          </a>
          <a
            href="https://github.com/opk-pm"
            target="_blank"
            rel="noreferrer"
            class="secondaryAction navAction"
          >
            <Icon icon="solar:code-line-duotone" />
            GitHub
          </a>
        </div>
      </div>
    </header>

    <main class="pageShell">
      <section class="heroSection">
        <div class="heroVisual">
          <img
            src="/images/opk-icon.png"
            alt="Opk icon"
            class="heroIconImage"
          />
        </div>

        <div class="heroContent">
          <div class="heroBadge">
            <Icon icon="solar:rocket-2-line-duotone" class="badgeIcon" />
            <span>Opk is in Beta!</span>
          </div>

          <h1 class="heroTitle">
            Any project.
            <span class="titleGradient">One command surface.</span>
          </h1>

          <p class="heroDescription">
            Stop thinking about which package manager to reach for. Opk figures
            it out, keeps your workflow consistent, and lets you ship with a
            type-safe, deterministic package configuration.
          </p>

          <div class="heroActionRow">
            <a href="#commands" class="primaryAction">
              <Icon icon="solar:programming-linear" />
              Explore Commands
            </a>
            <a href="#install" class="secondaryAction">
              <Icon icon="solar:download-line-duotone" />
              Install Opk
            </a>
          </div>
        </div>
      </section>

      <section id="features" class="featureSection">
        <article
          v-for="(featureItem, index) in FeatureItems"
          :key="featureItem.title"
          class="featureCard"
          :style="{ '--delayIndex': index }"
        >
          <Icon :icon="featureItem.icon" class="featureIcon" />
          <h2>{{ featureItem.title }}</h2>
          <p>{{ featureItem.description }}</p>
        </article>
      </section>

      <section id="commands" class="commandSection">
        <header class="sectionHeader">
          <h2>Command Surface</h2>
          <p>Focused commands for dependency control and script execution.</p>
        </header>

        <div class="commandGrid">
          <article
            v-for="(commandItem, index) in CommandExamples"
            :key="commandItem.command"
            class="commandCard"
            :style="{ '--delayIndex': index }"
          >
            <div class="commandLabel">
              <Icon :icon="commandItem.icon" />
              <span>{{ commandItem.label }}</span>
            </div>
            <code>{{ commandItem.command }}</code>
          </article>
        </div>
      </section>

      <section id="about" class="aboutSection">
        <header class="sectionHeader">
          <h2>About Opk</h2>
          <p>
            The typed <code>package.ts</code> model came first, then Opk unified
            fragmented package-manager workflows around it.
          </p>
        </header>

        <article class="aboutLeadCard">
          <div class="aboutLeadTitle">
            <Icon icon="solar:document-text-line-duotone" />
            <h3>Why Opk came about</h3>
          </div>
          <p>
            First came <code>package.ts</code>, created because
            <code>package.json</code> was inadequate as a source of truth. Opk
            came after, from frustration with package-manager fragmentation, and
            integrated directly with that typed config model.
          </p>
        </article>

        <div class="aboutGrid">
          <article class="aboutCard">
            <h3>package.json should be a source of truth</h3>
            <p>
              <code>package.ts</code> enables a typed, centralized metadata
              layer where project information like version, name, and other
              variables can be defined safely and reused throughout your
              tooling.
            </p>
          </article>

          <article class="aboutCard">
            <h3>Package manager choice should be explicit</h3>
            <p>
              Opk introduced the mandatory <code>pm</code> field in
              <code>package.ts</code>, storing the package manager object
              directly so manager selection is deterministic and first-class.
            </p>
          </article>

          <article class="aboutCard">
            <h3>New package managers should remain compatible</h3>
            <p>
              The <code>PackageManager</code> type encapsulates manager scripts.
              If a new manager appears, define a compatible object and set it as
              <code>pm</code> in <code>package.ts</code> and Opk commands work
              natively with it.
            </p>
          </article>

          <article class="aboutCard">
            <h3>package.json is not descriptive enough</h3>
            <p>
              <code>package.ts</code> supports comments, richer formatting, and
              computed properties, making intent clearer and configuration more
              expressive for real projects.
            </p>
          </article>
        </div>
      </section>

      <section id="install" class="installationSection">
        <header class="sectionHeader">
          <h2>Installation</h2>
          <p>Minimal setup to bootstrap Opk in your environment.</p>
        </header>

        <pre
          class="installCode"
        ><code><span class="tokenComment"># first, install NPM, Node, and Bun</span>
<span class="tokenComment"># then,</span>
npm i -g opk-pm
opk help</code></pre>
      </section>

      <section class="packageSection">
        <header class="sectionHeader">
          <h2>What package.ts Looks Like</h2>
          <p>
            Typed package metadata with explicit scripts and deterministic
            dependency management.
          </p>
        </header>

        <pre
          class="codeExample"
        ><code><span class="tokenBlue">import</span> <span class="tokenPink">{</span> <span class="tokenPurple">definePackage</span><span class="tokenPink">,</span> <span class="tokenPurple">BunPm</span> <span class="tokenPink">}</span> <span class="tokenBlue">from</span> <span class="tokenYellow">'@opk/ts-pkg'</span>

<span class="tokenBlue">export default</span> <span class="tokenPurple">definePackage</span>({
  <span class="tokenPink">pm</span>: <span class="tokenPurple">BunPm</span>, <span class="tokenComment">// explicit pm!</span>
  <span class="tokenPink">name</span>: <span class="tokenYellow">'@opk/site'</span>,
  <span class="tokenPink">type</span>: <span class="tokenYellow">'module'</span>,

  <span class="tokenPink">scripts</span>: {
    <span class="tokenPink">dev</span>: <span class="tokenYellow">'vite'</span>,
    <span class="tokenPink">build</span>: <span class="tokenYellow">'vite build'</span>
  },

  <span class="tokenPink">dependencies</span>: {
    <span class="tokenPink">vue</span>: <span class="tokenYellow">'^3.5.28'</span>,
    <span class="tokenPink">vite</span>: <span class="tokenYellow">'^7.3.1'</span>
  }
})</code></pre>
      </section>
    </main>

    <footer class="siteFooter">
      <p>Built with Vue + Opk in 2026.</p>
    </footer>
  </div>
</template>
