        import $ from "jquery";
        import { SBServer } from "../scripts/sb-server.module.js";
        const update = new SBServer(
            "https://hqqykvvumlgoudkikmlx.supabase.co",
            "update",
            "sb_publishable_WUK6FDzfwvMBMd50a4HHcw_VvV7uMDs"
        );

        $('#chg').on("submit",async(e)=>{
            e.preventDefault();

            $('#status').html('Making changes...');
            await update.patch('id=eq.1',{
                admin_key: $('#ak').val(),
                roth_val: $('#rv').val()
            });
            $('#status').html('Changes applied.');
        });
        async function setup() {
            const [adminThings]=await update.get('select=admin_key,roth_val');
            const majo = new SBServer(
                "https://sbzzbzkgbgybtlerwyic.supabase.co",
                "investors",
                "sb_publishable_mxHfTHVfW799Tf3Q9izVgQ_VAAzVxk7"
            );
            $('#invt').html('investors: '+(await majo.count('id=gt.0')));
            $('#ak').val(adminThings.admin_key);
            $('#rv').val(adminThings.roth_val);
            $('#status').html('Data synced.');
        };
        setup();