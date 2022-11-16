
exports = {

  onTicketCreateHandler(payload) {
    console.log("onTicketCreate");
    console.log(`Ticket created with ID: ${payload.data.ticket.id}`);
    console.log(`Ticket subject: ${payload.data.ticket.subject}`);
    console.log(`Ticket requested by: ${JSON.stringify(payload.data.requester, null, 2)}`);
  },

  onTicketUpdateHandler(payload) {
    console.log("onTicketUpdate");
    console.log(`Ticket updated with ID: ${payload.data.ticket.id}`);
    console.log(`Ticket changes made: ${JSON.stringify(payload.data.changes, null, 2)}`);
  },


  onConversationCreateHandler(payload) {
    console.log("onConversationCreate");
    console.log(`Private?: ${payload.data.conversation.private}`);
    console.log(`Added to ticket: ${payload.data.conversation.ticket_id}`);
  },
};
