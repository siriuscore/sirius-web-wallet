<template>
  <v-card>
    <v-card-title>
      <span class="headline">{{ $t('Welcome to the Sirius Web Wallet') }}</span>
    </v-card-title>
    <v-card-text>
      Please see below instructions on how to use the functions availabe for this web wallet
    </v-card-text>
    <v-card-title>
      <span class="headline">{{ $t('Export private key from the Sirius desktop wallet') }}</span>
    </v-card-title>
    <v-card-text>
      <p>
        You will need your private key if you want to import the desktop wallet into the web wallet. With the desktop (Sirius-Core) wallet open, navigate to the Help-->Debug window and then select the Console tab.
      </p>
      If your wallet is locked you need to unlock it first for 5 minutes with this command:
      <p><i>walletpassphrase "your-wallet-address" 300</i></p>
        Then you can export your current wallet private key:
        <p><i>dumpprivkey your-private-wallet-address</i></p>
    </v-card-text>
    <v-card-title>
      <span class="headline">{{ $t('Import address into the web wallet') }}</span>
    </v-card-title>
    <v-card-text>
      <p>
        First open the web wallet in your browser. If you already have a Sirius wallet you can import the wallet in one of 3 ways:
        <ul>
          <li><b>From mnemonic phrase:</b> restores an address from another wallet using 12 seed words</li>
          <li><b>From a WIF:</b> restores an address from a private key</li>
          <li><b>From a key file:</b> restores an address from a Key File created by the web wallet</li>
        </ul>
      </p>
      <p>
        You will be prompted to enter the relevant information based on the method you choose.
      </p>
      <p>
        If you don't have a Sirius wallet yet, you can create a new address in one of two ways:
        <ul>
          <li><b>With a generated key file:</b> creates a Sirius address and downloads a Key File (containing your encrypted private key)</li>
          <li><b>With a generated mnemonic phrase:</b> creates 12 random seed words and a Sirius address</li>
        </ul>
      </p>
      <p>
        You will be prompted to enter a password when creating a new wallet with the pass phrase or key file depending on which method you chose. KEEP THIS INFORMATION SAFE! If you lose your password, key file, or pass phrase you will LOSE YOUR ADDRESS and all the funds that is currently in it. The only way to relaunch/restore a wallet created with the “Generate new Wallet” option is to “Restore from Key File” by loading the Key File and entering the password. Make sure you save this information in a safe place. The password is specific to the key file or pass phrase. This password is not stored on the blockchain.
      </p>
    </v-card-text>
    <v-card-title>
      <span class="headline">{{ $t('General use of the web wallet functions') }}</span>
    </v-card-title>
    <v-card-text>
      Once you have restored your wallet, the transactions functions will become available in the menu on the left.
    </v-card-text>
    <v-card-text>
      Before you send any coins to the wallet make sure you can close and reopen the wallet with the same receive address. Using the menu option `Dump as Key File` and `Restore from Key File` is a safe way to do this. Using the menu option to restore from seed words to reopen the wallet is riskier because entering a typo for the seed words or password will create an unexpected random address. In order to receive funds you need to supply your public address (first line in wallet info) to the sender. Wait a few minutes for the next block to be published and reload the web wallet to see the new balance. You can also click on the menu option View Wallet Txs to see the receiving transaction. Always double check that you are using the correct address when sending or receiving funds as sending funds to the wrong account cannot be retrieved once processed.
    </v-card-text>
    <v-card-title>
      <span class="headline">{{ $t('View Wallet Info') }}</span>
    </v-card-title>
    <v-card-text>
      <p>
        Contains the balance and address information for your wallet.
      </p>
      Fields:
      <ul>
        <li><b>Address:</b> Your public address</li>
        <li><b>Balance:</b> Your current balance</li>
        <li><b>Unconfirmed balance:</b> Pending balance not yet confirmed on the blockchain</li>
        <li><b>Private key:</b> Your private key, hidden as standard</li>
      </ul>
    </v-card-text>
    <v-card-title>
      <span class="headline">{{ $t('View Wallet Transactions (Txs)') }}</span>
    </v-card-title>
    <v-card-text>Displays the last 10 transactions for the loaded SIRX address.</v-card-text>
    <v-card-title>
      <span class="headline">{{ $t('Send') }}</span>
    </v-card-title>
    <v-card-text>
      <p>
        Used to send funds to another account.
      </p>
      Fields:
      <ul>
        <li><b>Address:</b> The receiving address for the transfer</li>
        <li><b>Amount:</b> The amount to be transferred</li>
        <li><b>Fee:</b> The fee charged to complete the transaction (default can be left at 0.01)</li>
      </ul>
    </v-card-text>
    <v-card-title>
      <span class="headline">{{ $t('Request Payment') }}</span>
    </v-card-title>
    <v-card-text>
      <p>
        Used to send a payment request to another account.
      </p>
      Fields:
      <ul>
        <li><b>Address:</b> The address that will send you the funds</li>
        <li><b>Amount:</b> The amount to be received</li>
        <li><b>Message:</b> A message to the sender for the transaction</li>
        <li><b>QR code:</b> An easy to scan QR code for the receiving transaction</li>
      </ul>
    </v-card-text>
    <v-card-title>
      <span class="headline">{{ $t('Dump As Key File') }}</span>
    </v-card-title>
    <v-card-text>
      When creating a key file to export your wallet you will be prompted to enter a password. This password is specific to the file being created. The password is not stored on blockchain and is specific to the key file being generated and not your address. Once a password has been entered you can select the green download button to create and download the file to your local drive. You need to remember this password if you ever want to restore your wallet from the Key File!
    </v-card-text>
    <v-card-title>
      <span class="headline">{{ $t('Restoring a web wallet to the desktop (Sirius-core) wallet') }}</span>
    </v-card-title>
    <v-card-text>
      <p>
        You can also restore the web wallet address back on the core wallet (desktop) simply by importing the private key found on the wallet info page. Start the console in the desktop wallet in the help-->debug window.
      </p>
      Use the command: <i>importprivkey your-private-wallet-address</i>
    </v-card-text>
  </v-card>
</template>

<script>
</script>
